package lab2;

import java.util.Scanner;

public class bai4 {
    public static void main(String[] args) {
        Scanner number = new Scanner(System.in);

        System.out.print("Nhap gio: ");
        int hour = number.nextInt();
        System.out.print("Nhap phut: ");
        int minute = number.nextInt();
        System.out.print("Nhap giay: ");
        int second = number.nextInt();

        int sum = (hour * 3600) + (minute * 60) + second;

        System.out.println("Tong so giay la " + sum);
    }
}
