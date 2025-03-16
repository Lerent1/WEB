package lab2;

import java.util.Scanner;

public class bai1 {
    public static void main(String[] args) {
        String name;
        String msv;
        String sdt;
        String lop;
        String gender;

        Scanner kaki = new Scanner(System.in);
        System.out.println("***************************");
        System.out.print("Nhap vao ho ten: ");
        name = kaki.nextLine();
        System.out.print("Nhap ma sinh vien: ");
        msv = kaki.nextLine();
        System.out.print("Nhap so dien thoai: ");
        sdt = kaki.nextLine();
        System.out.print("Nhap lop: ");
        lop = kaki.nextLine();
        System.out.print("Gioi tinh: ");
        gender = kaki.nextLine();

        System.out.println("***************************");

        System.out.println("Ho ten: " + name);
        System.out.println("Ma sinh vien: " + msv);
        System.out.println("Lop: " + lop);
        System.out.println("Gioi tinh: " + gender);
        System.out.println("So dien thoai: " + sdt);

        System.out.println("***************************");
    }
}
