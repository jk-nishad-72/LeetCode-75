
public class Solution {
    // Example guess function (you'll replace this with your actual logic)
    public int guess(int num) {
        // return 0 if correct, -1 if target is lower, 1 if target is higher
        int target = 42; // just for demo
        if (num == target) return 0;
        else if (num > target) return -1;
        else return 1;
    }

    public int search(int n) {
        int i = 1;
        int j = n;

        while (i <= j) {
            int mid = i + (j - i) / 2; // safer than (i+j)/2 to avoid overflow

            int ans = guess(mid);

            if (ans == 0) {
                return mid; // found the number
            } else if (ans == -1) {
                j = mid - 1; // search left half
            } else {
                i = mid + 1; // search right half
            }
        }
        return -1; // not found
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int result = sol.search(100);
        System.out.println("Result: " + result);
    }
}
