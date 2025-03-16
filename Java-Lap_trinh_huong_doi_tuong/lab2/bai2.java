package lab2;

import java.util.Scanner;

public class bai2 {
    public static void main(String[] args) {
        Scanner number = new Scanner(System.in);

        System.out.print("Nhap so co 3 chu so: ");
        int num = number.nextInt();

        int hangTram = num / 100;
        int hangChuc = (num / 10) % 10;
        int hangDonVi = num % 10;

        System.out.println("Hang tram: " + hangTram);
        System.out.println("Hang chuc: " + hangChuc);
        System.out.println("Hang don vi: " + hangDonVi);
    }
}
