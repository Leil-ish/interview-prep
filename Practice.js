// 1. Given a document, implement an algorithm to count the number of word occurrences.
// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest 
// Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

const document = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"

document.split(" ").forEach((word) => {
  const numberOfOccurrences = document.match(new RegExp(word, 'gi')).length;
  console.log(`${word} = ${numberOfOccurrences}`)
})


// 2. Given a sorted linked list, write an algorithm to delete all duplicate numbers 
// from the sorted linked list.
let deleteDuplicates = function(head) {
    let current=head;
    while(current && current.next) {
        if(current.val = current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next;
        }
    }
    return head;
}


// 3. Given a string, write an algorithm to count the number of words in the string 
// that are palindromes. The output must include a list of the palindromes and the 
// number of palindromes.
 // - Input: `"Dad gave mom a Tesla as a racecar"`
 // - Output: `Dad, mom, racecar, 3 Palindromes`

 function findPalindromes(sentence) {
    const words = sentence.replace(/[^\w\s]/gi, '').split(' ');
    const palindromes = words.filter(isPalindrome);
    return palindromes + ',' + ' ' + palindromes.length + ' ' + 'Palindromes';
  }
  
  function isPalindrome(word) {
    if (word.length <= 1) return false;
    word = word.toLowerCase();
    for (let i = 0; i < word.length / 2; i++) {
      if (word[i] !== word[word.length - 1 - i]) return false;
    }
    return true;
  }
  
  console.log(findPalindromes('Dad gave mom a Tesla as a racecar'));


// 4. Explain how a hash table works.

/* Here's an explanation in layman's terms.

Let's assume you want to fill up a library with books and not just stuff them in there, but you want to be able to 
easily find them again when you need them.

So, you decide that if the person that wants to read a book knows the title of the book and the exact title to boot, 
then that's all it should take. With the title, the person, with the aid of the librarian, should be able to find the 
book easily and quickly.

So, how can you do that? Well, obviously you can keep some kind of list of where you put each book, but then you have 
the same problem as searching the library, you need to search the list. Granted, the list would be smaller and easier 
to search, but still you don't want to search sequentially from one end of the library (or list) to the other.

You want something that, with the title of the book, can give you the right spot at once, so all you have to do is 
just stroll over to the right shelf, and pick up the book.

But how can that be done? Well, with a bit of forethought when you fill up the library and a lot of work when you 
fill up the library.

Instead of just starting to fill up the library from one end to the other, you devise a clever little method. You 
take the title of the book, run it through a small computer program, which spits out a shelf number and a slot number 
on that shelf. This is where you place the book.

The beauty of this program is that later on, when a person comes back in to read the book, you feed the title through 
the program once more, and get back the same shelf number and slot number that you were originally given, and this is 
where the book is located.

The program, as others have already mentioned, is called a hash algorithm or hash computation and usually works by 
taking the data fed into it (the title of the book in this case) and calculates a number from it.

For simplicity, let's say that it just converts each letter and symbol into a number and sums them all up. In reality, 
it's a lot more complicated than that, but let's leave it at that for now.

The beauty of such an algorithm is that if you feed the same input into it again and again, it will keep spitting out 
the same number each time.

Ok, so that's basically how a hash table works.

Technical stuff follows.

First, there's the size of the number. Usually, the output of such a hash algorithm is inside a range of some large 
number, typically much larger than the space you have in your table. For instance, let's say that we have room for 
exactly one million books in the library. The output of the hash calculation could be in the range of 0 to one billion 
which is a lot higher.

So, what do we do? We use something called modulus calculation, which basically says that if you counted to the number 
you wanted (i.e. the one billion number) but wanted to stay inside a much smaller range, each time you hit the limit 
of that smaller range you started back at 0, but you have to keep track of how far in the big sequence you've come.

Say that the output of the hash algorithm is in the range of 0 to 20 and you get the value 17 from a particular title. 
If the size of the library is only 7 books, you count 1, 2, 3, 4, 5, 6, and when you get to 7, you start back at 0. 
Since we need to count 17 times, we have 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, and the final number is 3.

Of course modulus calculation isn't done like that, it's done with division and a remainder. The remainder of dividing 
17 by 7 is 3 (7 goes 2 times into 17 at 14 and the difference between 17 and 14 is 3).

Thus, you put the book in slot number 3.

This leads to the next problem. Collisions. Since the algorithm has no way to space out the books so that they fill 
the library exactly (or the hash table if you will), it will invariably end up calculating a number that has been used 
before. In the library sense, when you get to the shelf and the slot number you wish to put a book in, there's already 
a book there.

Various collision handling methods exist, including running the data into yet another calculation to get another spot 
in the table (double hashing), or simply to find a space close to the one you were given (i.e. right next to the 
previous book assuming the slot was available also known as linear probing). This would mean that you have some 
digging to do when you try to find the book later, but it's still better than simply starting at one end of the 
library.

Finally, at some point, you might want to put more books into the library than the library allows. In other words, 
you need to build a bigger library. Since the exact spot in the library was calculated using the exact and current 
size of the library, it goes to follow that if you resize the library you might end up having to find new spots for 
all the books since the calculation done to find their spots has changed.

I hope this explanation was a bit more down to earth than buckets and functions :) */


// 5. Given 2 linked lists, where each node in each linked list represents a character 
// in a string, write a function compare() that compares the 2 strings, i.e., it 
// returns 0 if both strings are the same, 1 if the 1st linked list is lexicographically 
// greater, and -1 if the 2nd string is lexicographically greater.
// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o` 
// - Output: `1`
// - Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
// - Output: `0`
// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b` 
// - Output: `-1`


// 6. Given a list of integers find the mode and the frequency of the mode. The mode 
// in a list of numbers is the value that occurs the most often. If no number in the 
// list is repeated, then there is no mode for the list.
// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`

function mode(array) {
    var counter = {};
    var mode = [];
    var max = 0;
    for (var i in array) {
        if (!(array[i] in counter))
            counter[array[i]] = 0;
        counter[array[i]]++;
 
        if (counter[array[i]] == max) 
            mode.push(array[i]);
        else if (counter[array[i]] > max) {
            max = counter[array[i]];
            mode = [array[i]];
        }
    }
    return `Mode = ${mode}, Freqency of mode = ${max}`;
}
console.log(mode([1, 2, 3, 6, 10, 3, 5, 6, 3, 3]));