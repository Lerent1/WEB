package baitaptrenlop;

import java.util.Scanner;

public class hocsinh {
    private String maSo;
    private String hoTen;
    private float diemTB;

    protected String getMaSo() {
        return maSo;
    }

    protected String getHoTen() {
        return hoTen;
    }

    protected float getDiemTB() {
        return diemTB;
    }

    public void input() {
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhap vao ma so: ");
        maSo = sc.nextLine();

        System.out.print("Nhap vao ho ten: ");
        hoTen = sc.nextLine();

        System.out.print("Nhap vao diem trung binh: ");
        diemTB = sc.nextFloat();
    }

    void output() {
        System.out.println("Ma so: " + maSo);
        System.out.println("Ho ten: " + hoTen);
        System.out.println("Diem TB: " + diemTB);
        ren(diemTB);
    }

    void ren(float diem) {
        if (diem > 9) {
            System.out.println("Xep loai: Xuat sac");
        } else if (diem >= 8) {
            System.out.println("Xep loai: diem gioi");
        } else if (diem >= 7) {
            System.out.println("Xep loai: diem kha");
        } else if (diem >= 6.5) {
            System.out.println("Xep loai: Trung binh kha");
        } else if (diem >= 5) {
            System.out.println("Xep loai: Trung binh");
        } else {
            System.out.println("Xep loai: yeu");
        }
    }

}
