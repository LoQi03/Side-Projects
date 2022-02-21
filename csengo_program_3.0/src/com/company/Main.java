package com.company;
import java.awt.*;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import static com.company.MainPanel.*;
import static com.company.MyFrame.button_list;
import static com.company.MyFrame.lista_count;

public class Main {
    static MyFrame frame;
    public static void main(String[] args) throws IOException {
        frame = new MyFrame();
        loading();
    }
    private static void loading() throws IOException {
        File_time_reading();
        File_condition_path();
    }

    private static void File_condition_path() throws IOException {
        BufferedReader file_path_reader = new BufferedReader(new FileReader(System.getProperty("user.dir")+"\\sound_path.txt"));
        file_condition_path=file_path_reader.readLine();
        File file=new File(file_condition_path);
        file_condition_label.setText("Betöltött hang: "+file.getName());
        frame_refresh();
    }

    private static void File_time_reading() throws IOException {
        BufferedReader file_time_reader = new BufferedReader(new FileReader(System.getProperty("user.dir")+"\\time.txt"));
        String line;
        while ((line = file_time_reader.readLine()) != null) {
            new_button(line);
            frame_refresh();
        }
        file_time_reader.close();
    }

    private static void new_button(String line) {
        button_list.add(new time_button_class());
        button_list.get(lista_count).setText(line);
        button_panel.add(button_list.get(lista_count));
        button_list.get(lista_count).setVisible(true);
        scroll_bar_height = scroll_bar_height + 55;
        button_panel.setPreferredSize(new Dimension(200, scroll_bar_height));
        lista_count++;
    }

    static void frame_refresh() {
        frame.invalidate();
        frame.validate();
        frame.repaint();
    }
}
