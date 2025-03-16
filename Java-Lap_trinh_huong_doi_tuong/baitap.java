import java.util.Scanner;

public class baitap {
    public static void main(String[] args) {
        Scanner number = new Scanner(System.in);

        System.out.print("Hay nhap diem trung binh: ");
        double diem = number.nextDouble();

        String xepLoai;

        if (diem < 5) {
            xepLoai = "Yeu";
        } else if (diem < 6.5) {
            xepLoai = "Trung binh";
        } else if (diem < 7) {
            xepLoai = "Trung binh kha";
        } else if (diem < 8) {
            xepLoai = "Kha";
        } else if (diem < 9) {
            xepLoai = "Gioi";
        } else {
            xepLoai = "Xuat xac";
        }

        System.out.println("Xep loai " + xepLoai);
    }
}
