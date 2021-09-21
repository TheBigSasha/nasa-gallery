package ca.sashaphoto.nasagalleryserver.util;


import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Random;
import java.util.Scanner;
import java.util.Stack;

public class RandomNames extends Random {
    private final Stack<String> namesRepo = new Stack();
    public static final int buffer_size = 65;
    public static final String api_url = "https://generator.patricktriest.com/api?seed=";

    public RandomNames(){
        runNameDownloader();
    }

    public String nextName(){
        runNameDownloader();
        return !namesRepo.isEmpty() ? namesRepo.pop() : "" + (char) nextInt(444);
    }

    private void runNameDownloader(){
        if(namesRepo.size() < buffer_size) {
            Thread t = new Thread(new NameDownloader());
            t.start();
        }

    }

    private class NameDownloader implements Runnable {

        /**
         * When an object implementing interface {@code Runnable} is used
         * to create a thread, starting the thread causes the object's
         * {@code run} method to be called in that separately executing
         * thread.
         * <p>
         * The general contract of the method {@code run} is that it may
         * take any action whatsoever.
         *
         * @see Thread#run()
         */
        @Override
        public void run() {
            while (namesRepo.size() < buffer_size) {
                try {
                    URL url = new URL(api_url + System.nanoTime());
                    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                    conn.setRequestMethod("GET");
                    conn.connect();
                    int responsecode = conn.getResponseCode();
                    if (responsecode != 200) {
                        throw new IOException("Response code: " + responsecode);
                    } else {
                        String inline = "";
                        Scanner sc = new Scanner(url.openStream());
                        while (sc.hasNext()) {
                            inline += sc.nextLine();
                        }
                        sc.close();
                        JSONParser parse = new JSONParser();
                        JSONObject jobj = (JSONObject) parse.parse(inline);
                        //More properties than creature are available :) IE. attribute
                        namesRepo.push(jobj.get("creature").toString());
                    }
                } catch (IOException | ParseException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
