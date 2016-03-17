# comment: counts the number of odd integers in x
> oddcount <- function(x) {
+ k <- 0
+ for (n in x) {
+
if (n %% 2 == 1) k <- k+1
+ }
+ return(k)
+ }
> oddcount(c(1,3,5))
[1] 3
> oddcount(c(1,2,3,7,9))
[1] 4
