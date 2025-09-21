|   input               |     output              |
|                       |                         |
|     "XXXX"            |        4                |
|     "0000"            |        4                |
|     "XXX00"           |        3                |
|                       |                         |
|    "XX0XXX00"         |      3                  |
|                       |                         |
|    "XXYYZZ000Z"       |      3                  |
|                       |                         |


```
1 "XXXX" 
output is just the lenght of the string 

so answer = input.length -> 4

```
```
2 "0000"
same happens with the second case where the longest length of repeated characters is just the length of the string 

so  answer will be length of input which is 4 

```
```
3 "XXX00"
this is the tricky part here we have to check wheather the strings are same or not and count it based on it 
and also need to check wether the current count is highest or not 

so need to build the logic for it in order to do so  
 

```
```
4 "XX0XXX00"

we can use the same logic we used in prvious case to count the highest number to repeatition 

so answer will be = 3 
```

```after making this logic  i tried  other strings also and its working as expected you can give any length of string and get the anwer and any character in string ```
