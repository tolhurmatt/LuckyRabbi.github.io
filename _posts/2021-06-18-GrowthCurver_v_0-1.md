---
layout: post
title: "Code Test Upload"
date: 2021-06-18
---

library("growthcurver")
library("tidyverse")

## -- Attaching packages --------------------------------------- tidyverse 1.3.0 --

## v ggplot2 3.3.3     v purrr   0.3.4
## v tibble  3.1.0     v dplyr   1.0.4
## v tidyr   1.1.2     v stringr 1.4.0
## v readr   1.4.0     v forcats 0.5.1

## -- Conflicts ------------------------------------------ tidyverse_conflicts() --
## x dplyr::filter() masks stats::filter()
## x dplyr::lag()    masks stats::lag()

library("readxl")
library("writexl")

## Make this the reader function :)
filenames = list.files(path = paste(getwd(),"/Inputs", sep=""))

# print(filenames[3])

time_to_hours <- function(time_string){
  # Split the string to get the numerical value
  x = str_split(time_string, " h")
  
  # Ignore if only the hour is present. Checks that the second string is non-empty
  if (unlist(x[[1]])[2] != ""){
    #print("There is minutes present")
    c = str_split(x[[1]], " min")
    return(as.numeric(c[[1]]) + ((as.numeric(c[[2]])[1])/60))
  }
  
  # Convert to hours
  return(as.numeric(unlist(x[[1]])[1]))
}

# Check that this works - output should be 0
#time_to_hours("0 h")
# Check that this works - output should be 0.5
#time_to_hours("0 h 30 min")
'''
for(i in 1:length(filenames)){
  
  print(paste("reading plate", filenames[i], "........."))
  
  wd = getwd()
  
  # String that determines what data to read A11:CT93 for a standard 96well plate
  #data_range = "A11:BV93"
  
  data = read_xlsx(paste(wd,"/Inputs/", filenames[i], sep=""), range="A11:CT93") # The range should not change from plate to plate.

  print("Converting format.........")
  
  # Convert to dataframe for later use
  data_df = list2DF(data)
  
  # Remove the 1st Column... eventually make this smart.
  data_df = data_df[,2:98]
  # Remove the 2nd Row by taking the complement... eventually make this smart
  data_df = data_df[-1,]
  
  # Rename the time column for GC
  names(data_df)[1] = "time"
  
  # Make everything numeric, readxl reads as strings.
  d = data_df
  d[2:97] = sapply(data_df[2:97], as.numeric)
  
  # Convert all of the times into hours
  for(j in seq_along(1:81)){
    d$time[j] = time_to_hours(d$time[j])
  }
  # Make all of these times numeric, R reverts to the column type.
  d$time = sapply(d$time, as.numeric)
  
  # Not even sure if this is necessary
  d = as.data.frame(d)
  
  print("success!")
  #print(d)
  
  setwd(paste(wd,"/Outputs/",sep=""))
  
  print("Saving Growth Curves...\n")
  # Plot the growth curves
  gc_fit = SummarizeGrowthByPlate(d, plot_fit = T, plot_file=paste(filenames[i],"_growth_curve",".pdf", sep=""))
  
  write_xlsx(gc_fit, path = filenames[i])
  
  setwd(wd)
}
'''
