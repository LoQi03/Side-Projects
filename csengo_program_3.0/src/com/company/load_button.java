package com.company;
import javax.swing.*;
import javax.swing.filechooser.FileNameExtensionFilter;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;

import static com.company.Main.frame;
import static com.company.MainPanel.file_condition_label;
import static com.company.MainPanel.file_condition_path;


public class load_button extends JButton implements ActionListener {
    load_button()
    {
        setText("Betöltés");
        setVisible(true);
        setBounds(10,10,80,25);
        setSize(100,30);
        this.addActionListener(this);
    }


    @Override
    public void actionPerformed(ActionEvent e) {
        if(e.getSource()==this)
        {
            is_wav();
        }
    }

    private void is_wav() {
        JFileChooser fileChooser = new JFileChooser();
        FileNameExtensionFilter filter = new FileNameExtensionFilter(".wav,.mp3","wav","mp3");
        fileChooser.setFileFilter(filter);
        int response = fileChooser.showOpenDialog(frame);
        if(response == JFileChooser.APPROVE_OPTION)
        {
            File file = new File(fileChooser.getSelectedFile().getAbsolutePath());
            file_condition_label.setText("Betöltött hang: " + file.getName());
            file_condition_path = "" + file.getAbsolutePath();

        }
    }
}
