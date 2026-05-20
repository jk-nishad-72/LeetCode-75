

import java.util.*;

public class UniqueOccurrences {
    public static boolean uniqueOccurrences(int[] arr) {
        // Step 1: Count occurrences using HashMap
        Map<Integer, Integer> map = new HashMap<>();
        for (int n : arr) {
            map.put(n, map.getOrDefault(n, 0) + 1);
        }

        // Step 2: Check uniqueness using HashSet
        Set<Integer> set = new HashSet<>();
        for (int occ : map.values()) {
            if (!set.add(occ)) { // add() returns false if occ already exists
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        System.out.println(uniqueOccurrences(new int[]{1, 2, 2, 1, 1, 3})); // true
        System.out.println(uniqueOccurrences(new int[]{1, 2}));             // false
        System.out.println(uniqueOccurrences(new int[]{-3, 0, 1, -3, 1, 1, 1, -3, 10, 0})); // true
    }
}
