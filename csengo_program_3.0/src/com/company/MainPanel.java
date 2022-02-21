package com.company;
import javax.swing.*;
import java.awt.*;

public class MainPanel extends JPanel{

    ////////////////////////////////////
    static JLabel file_condition_label;
    static String file_condition_path;
    load_button load_button;
    static JSpinner hr_spinner;
    static JSpinner min_spinner;
    Add_time time_button;
    JLabel hr_label;
    JLabel min_label;
    static JPanel button_panel;
    static JScrollPane scroll_button_panel;
    static int scroll_bar_height=0;
    static JLabel real_time_label;
    ////////////////////////////////////

    MainPanel()  {
        //add tools to panel
        add_tools_to_panel();
        //real time label
        real_time_label_settings();
        //Panel settings
        panel_settings();
        //min spinner
        min_spinner_settings();
        //hr spinner
        hr_spiner_settings();
        //time panel
        time_panel_settings();
        //Button panel
        button_panel_settings();
        //save button
        save_button_settings();
    }

    private void add_tools_to_panel() {
        file_condition_label = new JLabel(file_condition_path);
        load_button = new load_button();
        time_button=new Add_time();
        hr_label = new JLabel("Óra:");
        min_label = new JLabel("Perc:");
        real_time_label = new JLabel();
    }

    private void real_time_label_settings() {
        real_time_label.setBounds(110,200,500,100);
        real_time_label.setFont(new Font("Stencil", Font.PLAIN, 100));
        real_time_label.setForeground(Color.ORANGE);
        add(real_time_label);
    }

    private void min_spinner_settings() {
        SpinnerModel msm = new SpinnerNumberModel(0,0,59,1);
        min_spinner=new JSpinner(msm);
        min_spinner.setBounds(80,300,50,50);
    }

    private void hr_spiner_settings() {
        SpinnerModel hsm = new SpinnerNumberModel(0,0,23,1);
        hr_spinner=new JSpinner(hsm);
        hr_spinner.setBounds(10,300,50,50);
    }

    private void time_panel_settings() {
        hr_label.setBounds(0,400,100,50);
        min_label.setBounds(150,400,100,50);
        hr_label.setFont(new Font("Stencil", Font.PLAIN, 30));
        hr_label.setForeground(Color.ORANGE);
        min_label.setFont(new Font("Stencil", Font.PLAIN, 30));
        min_label.setForeground(Color.ORANGE);
        hr_spinner.setBounds(0,450,100,50);
        min_spinner.setBounds(150,450,100,50);
        time_button.setBounds(0,500,250,100);
        time_button.setBackground(Color.LIGHT_GRAY);
        time_button.setFont(new Font("Stencil", Font.PLAIN, 30));
        time_button.setForeground(Color.BLACK);
        hr_spinner.setFont(new Font("Stencil", Font.PLAIN, 30));
        min_spinner.setFont(new Font("Stencil", Font.PLAIN, 30));
        add(hr_label);
        add(min_label);
        add(hr_spinner);
        add(min_spinner);
        add(time_button);
    }

    private void button_panel_settings() {
        button_panel= new JPanel();
        button_panel.setBackground(Color.GRAY);
        button_panel.setPreferredSize(new Dimension(200,scroll_bar_height));
        scroll_button_panel = new JScrollPane(button_panel,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED,JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
        scroll_button_panel.setBounds(500,0,300,600);
        scroll_button_panel.setBackground(Color.GRAY);
        add(scroll_button_panel);
    }

    private void save_button_settings() {
        save_button sbutton = new save_button();
        sbutton.setBounds(250,500,250,100);
        sbutton.setBackground(Color.LIGHT_GRAY);
        sbutton.setFont(new Font("Stencil", Font.PLAIN, 30));
        sbutton.setForeground(Color.BLACK);
        sbutton.setVisible(true);
        add(sbutton);
    }

    private void panel_settings() {
        setLayout(null);
        setBackground(Color.DARK_GRAY);
        load_button.setBounds(0,0,500,50);
        load_button.setBackground(Color.LIGHT_GRAY);
        load_button.setFont(new Font("Stencil", Font.PLAIN, 20));
        load_button.setForeground(Color.BLACK);
        file_condition_label.setVisible(true);
        file_condition_label.setBounds(0,50,500,50);
        file_condition_label.setFont(new Font("Stencil", Font.PLAIN, 20));
        file_condition_label.setForeground(Color.ORANGE);
        add(load_button);
        add(file_condition_label);
    }

}
