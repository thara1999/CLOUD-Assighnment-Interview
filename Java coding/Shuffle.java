import java.util.Random;

import java.util.Arrays;

public class Shuffle 
{

    static void random( int arr[], int n)

    {
        Random r = new Random();

        for (int i = n-1; i > 0; i--) {

            int j = r.nextInt(i+1);

            int temp = arr[i];

            arr[i] = arr[j];

            arr[j] = temp;

        }

        // Prints the random arr

        System.out.println(Arrays.toString(arr));

    }


    public static void main(String[] args) 

    {

         int[] arr = {1,2,3,4,5,6,7};

         int n = arr.length;

          random(arr, n);

    }
}
