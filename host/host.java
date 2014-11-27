
import javax.swing.*;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.io.*;

public class host {

	public static byte[] getBytes(int length) {
		byte[] bytes = new byte[4];
		bytes[0] = (byte) ( length      & 0xFF);
		bytes[1] = (byte) ((length>>8)  & 0xFF);
		bytes[2] = (byte) ((length>>16) & 0xFF);
		bytes[3] = (byte) ((length>>24) & 0xFF);
		return bytes;
	}
	public static void main(String[] args) {
		JFrame frame = new JFrame("test");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.pack();
		frame.setVisible(true);
		String message = "{\"text\":\"eqeqweq\"}";
		try {
			System.out.write(getBytes(message.length()));
			System.out.println("");
			System.out.print("{\"text\":\"eqeqweq\"}");
		} catch (IOException ex) {
			ex.printStackTrace();
		}
	}
}
