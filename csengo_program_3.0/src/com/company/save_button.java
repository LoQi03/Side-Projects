package com.company;
import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

import static com.company.Main.frame;
import static com.company.MainPanel.file_condition_path;
import static com.company.MyFrame.button_list;

public class save_button extends JButton implements ActionListener {
    save_button()
    {
        setText("Mentés");
        setVisible(true);
        this.addActionListener(this);
    }
    @Override
    public void actionPerformed(ActionEvent e) {
        if(e.getSource()==this)
        {
            int result = JOptionPane.showConfirmDialog(frame,"Biztos hogy, menteni szeretnéd az időpontokat és a hangot?", "\n" +
                            "Message!",
                    JOptionPane.YES_NO_OPTION,
                    JOptionPane.QUESTION_MESSAGE);
            if(result==JOptionPane.YES_OPTION)
            {
                file_time_write();
                file_path_write();
                JOptionPane.showMessageDialog(frame,"A hang és az időpontok mentésre kerültek!");
            }
        }
    }

    private void file_path_write() {
        try {
            BufferedWriter path_write = new BufferedWriter(new FileWriter(System.getProperty("user.dir")+"\\sound_path.txt"));
            path_write.write(file_condition_path);
            path_write.close();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    private void file_time_write() {
        try {
            BufferedWriter button_write = new BufferedWriter(new FileWriter(System.getProperty("user.dir")+"\\time.txt"));
            for (JButton jButton : button_list) {
                button_write.write(jButton.getText() + "\n");
            }
            button_write.close();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
