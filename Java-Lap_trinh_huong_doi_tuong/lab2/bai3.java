package lab2;

import java.util.Scanner;

public class bai3 {
    public static void main(String[] args) {
        Scanner number = new Scanner(System.in);

        System.out.print("Nhap so co 2 chu so: ");
        int num = number.nextInt();

        if (num < 10 || num > 99) {
            System.out.println("Hay nhap lai");
        } else {
            int hangChuc = num / 10;
            int donVi = num % 10;
            int sum = hangChuc + donVi;

            System.out.println(hangChuc + " + " + donVi + " = " + sum);
        }
    }
}
