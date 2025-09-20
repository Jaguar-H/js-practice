| Input         | Expected Output |
| ------------- | --------------- |
| `"LZ"`        | 0               |
| `"Z L"`       | 1               |
| `"L     Z"`   | 5               |
| `"L     L"`   | -1              |
| `"Z   Z   Z"` | -1              |
| `"L  ZL Z"`   | 0               |
| `"Z LZ LZ"`   | 0               |
| `"L      Z"`  | 6               |
| `"L  Z   L"`  | 2               |
| `"Z   ZL  Z"` | 0               |
| `"L  LZL Z"`  | 0               |





```
1. input   LZ
 index for l = 0 
 index for Z = 1

 distance = z-l = 1 

expected output = 0 

distance - 1 = 0 
need logic to get the index of l and z 

```



```
2. input Z_L

index for l = 2
index for z = 0 

if l >z  -> distance = l-z
else distance = z - l -1

need logic to. check if index if lion is greater than zebra or not ```

```

```
3. input  l_____l

index for zebra =  no z is there 
index for lion = 0  ,  6 

no zebra  so distance should be -1 

need a logic to check the weather there is a zebra ```

```

```
4. input  Z__Z__Z

index for zebra = 0 , 2 , 5
index for lion = no L is there 

no lion distance should be -1 
need a logic to check the weather there is a lion```

```

```
5. L__ZL_Z

index for zebra = 3 , 6
index for lion  = 0 , 4

need logic to check every comination and find the shortest distance 

```




