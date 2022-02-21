package com.company;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Objects;

import static com.company.Main.frame_refresh;
import static com.company.MainPanel.*;
import static com.company.MyFrame.button_list;
import static com.company.MyFrame.lista_count;

public class Add_time extends JButton implements ActionListener {

    Add_time()
    {
        setText("Hozzáadás");
        setVisible(true);
        setPreferredSize(new Dimension(100,25));
        this.addActionListener(this);
    }
    @Override
    public void actionPerformed(ActionEvent e) {
        add_button_to_button_panel();
    }

    void add_button_to_button_panel()
    {
        boolean is_button_exist=false;
        String hour,minutes;
        if((int)hr_spinner.getValue()<10)
        {
            hour="0"+hr_spinner.getValue();
        }
        else
        {
            hour=""+hr_spinner.getValue();
        }
        if((int)min_spinner.getValue()<10)
        {
            minutes="0"+min_spinner.getValue();
        }
        else
        {
            minutes=""+min_spinner.getValue();
        }
        for (JButton jButton : button_list) {
            if (Objects.equals(jButton.getText(), hour + ":" + minutes)) {
                is_button_exist = true;
            }
        }
        if(is_button_exist)
        {
            JOptionPane.showMessageDialog(new JFrame(), "Ez az időpont már létezik a listába!", "Hiba!",
                    JOptionPane.ERROR_MESSAGE);
        }
        else
        {
            upload_time_buttons_panel(hour, minutes);
        }
    }

    private void upload_time_buttons_panel(String hour, String minutes) {
        button_list.add(new time_button_class());
        button_list.get(lista_count).setText(hour +":"+ minutes);
        button_panel.add(button_list.get(lista_count));
        button_list.get(lista_count).setVisible(true);
        scroll_bar_height = scroll_bar_height + 55;
        button_panel.setPreferredSize(new Dimension(200, scroll_bar_height));
        lista_count++;
        frame_refresh();
    }

}

