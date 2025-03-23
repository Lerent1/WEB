package baitaptrenlop;

import java.util.Scanner;

public class demo1 {
    public static void main(String[] args) {
        Scanner HocSinh = new Scanner(System.in);
        hocsinh hs1 = new hocsinh();
        hocsinh hs2 = new hocsinh();

        System.out.println("Nhap thong tin hoc sinh:");
        hs1.input();

        System.out.println("**********************");
        System.out.println("Thong tin cua hoc sinh vua nhap la:");
        hs1.output();
    }
}
