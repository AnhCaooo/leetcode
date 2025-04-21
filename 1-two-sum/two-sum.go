// twoSum function that finds two indices whose elements sum up to the target
func twoSum(nums []int, target int) []int {
    // Create a map to store the difference of the target and the current element
    // along with its index
    lookup := make(map[int]int)

    // Iterate through the array
    for i, num := range nums {
        // Calculate the complement (target - current number)
        complement := target - num

        // Check if the complement exists in the map
        if idx, ok := lookup[complement]; ok {
            // If it exists, return the indices
            return []int{idx, i}
        }

        // Otherwise, store the current number in the map with its index
        lookup[num] = i
    }

    // Return an empty array if no solution is found (though it's guaranteed there is one)
    return []int{}
}
