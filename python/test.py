import math

def distinct_arrangements(word):
    # Calculate the total number of letters
    total_letters = len(word)
    
    # Create a dictionary to store the frequency of each letter
    letter_count = {}
    for letter in word:
        if letter in letter_count:
            letter_count[letter] += 1
        else:
            letter_count[letter] = 1
    
    # Calculate the denominator (product of factorials of the frequencies)
    denominator = 1
    for count in letter_count.values():
        denominator *= math.factorial(count)
    
    # Calculate the number of distinct arrangements
    num_arrangements = math.factorial(total_letters) // denominator
    
    return num_arrangements

# Example usage
word = "SUCCESS"
print(distinct_arrangements(word))
