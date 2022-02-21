package com.company;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import static com.company.Main.frame;
import static com.company.Main.frame_refresh;
import static com.company.MainPanel.*;
import static com.company.MyFrame.button_list;
import static com.company.MyFrame.lista_count;

public class time_button_class extends JButton implements ActionListener {
    time_button_class()
    {
        setPreferredSize(new Dimension(300,50));
        addActionListener(this);
        setBackground(Color.DARK_GRAY);
        setForeground(Color.ORANGE);
        setFont(new Font("Stencil", Font.PLAIN, 20));
    }
    @Override
    public void actionPerformed(ActionEvent e) {
            if(e.getSource()==this)
            {
                int result = JOptionPane.showConfirmDialog(frame,"Biztos hogy, törölni szeretnéd az időpontot?", "\n" +
                                "Message!",
                        JOptionPane.YES_NO_OPTION,
                        JOptionPane.QUESTION_MESSAGE);
                if(result==JOptionPane.YES_OPTION)
                {
                    remove_button_from_panel();
                }
            }
    }

    private void remove_button_from_panel() {
        button_list.remove(this);
        button_panel.remove(this);
        this.setVisible(false);
        scroll_bar_height = scroll_bar_height - 55;
        button_panel.setPreferredSize(new Dimension(200, scroll_bar_height));
        lista_count--;
        frame_refresh();
        System.out.println(lista_count);
    }
}
