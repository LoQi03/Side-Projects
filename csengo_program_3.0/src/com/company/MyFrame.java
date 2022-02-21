package com.company;
import javax.sound.sampled.*;
import javax.swing.*;
import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.List;
import java.util.Timer;

import static com.company.MainPanel.file_condition_path;
import static com.company.MainPanel.real_time_label;

public class MyFrame extends JFrame {
    static List<JButton> button_list = new ArrayList<>();
    static Timer time_check;
    static int lista_count = 0;
    ImageIcon image;

    MyFrame() {
        setSize(815, 635);
        MainPanel main_panel = new MainPanel();
        setContentPane(main_panel);
        setTitle("Csengő Program");
        image = new ImageIcon(System.getProperty("user.dir")+"\\alarm.png");
        setIconImage(image.getImage());
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        setDefaultLookAndFeelDecorated(true);
        setResizable(false);
        setVisible(true);

        time_check = new Timer(true);

        TimerTask time_listening = new TimerTask() {
            @Override
            public void run() {
                Calendar date = Calendar.getInstance();
                String hour, minutes;
                if (date.getTime().getHours() < 10) {
                    hour = "0" + date.getTime().getHours();
                } else {
                    hour = "" + date.getTime().getHours();
                }
                if (date.getTime().getMinutes() < 10) {
                    minutes = "0" + date.getTime().getMinutes();
                } else {
                    minutes = "" + date.getTime().getMinutes();
                }
                real_time_label.setText(hour+":"+minutes);
                for (JButton jButton : button_list) {
                    if ((hour + ":" + minutes).equals(jButton.getText()) && date.getTime().getSeconds()==0) {
                        System.out.println("Csengetés!");
                        try {
                            sound_play();
                        } catch (UnsupportedAudioFileException | IOException | LineUnavailableException e) {
                            e.printStackTrace();
                        }
                    }
                }
            }
        };

        time_check.schedule(time_listening, 0, 1000);
    }
    private void sound_play() throws UnsupportedAudioFileException, IOException, LineUnavailableException {
        File file = new File(file_condition_path);
        AudioInputStream audioStream = AudioSystem.getAudioInputStream(file);
        Clip audio_clip = AudioSystem.getClip();
        audio_clip.open(audioStream);
        audio_clip.start();

    }
}


