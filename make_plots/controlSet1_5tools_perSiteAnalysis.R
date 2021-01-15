# per-site results
# compare the predicted methylation frequency with the expected methylation frequency for each control subset (m0, m10, m20...m100)

# Load libraries
library(dplyr)
library(ggplot2)
library(reshape2)
library(data.table)
library(stringr)
library(Metrics)
library(tidymodels)


############################################################################################################################################
########################################################  Define the input files ###########################################################
############################################################################################################################################

########################## 1 ## target CpG sites (2 columns: chromosome, position)
cpgs <- read.table("input/100cpgs.txt", header = FALSE, sep="\t") 
colnames(cpgs) <- c("Chr", "Pos")
cpgs$Chr <- as.character(levels(cpgs$Chr))[cpgs$Chr]
str(cpgs)



######################### 2 ## Nanopolish result files
for (i in seq(0,100,10)){
  data <- read.table(paste0("results/set1/m",i,"_nanopolish-freq-perCG.tsv"), header = TRUE, sep = "\t")
  colnames(data) <- c("Chr", "Pos", paste0("m",i,".np.freq"), paste0("m",i,".np.cov"))
  if (i == 0){
    np <- left_join(cpgs, data, by = c("Chr", "Pos"))
  } else {
    np <- left_join(np, data, by = c("Chr", "Pos"))
  }
}

np.melt <- melt(np, id ="Pos",measure=c("m0.np.freq", "m10.np.freq", "m20.np.freq", "m30.np.freq",
                                        "m40.np.freq", "m50.np.freq", "m60.np.freq", "m70.np.freq",
                                        "m80.np.freq", "m90.np.freq", "m100.np.freq"))
levels(np.melt$variable) <- c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%") # Rename the levels



######################### 3 ## DeepSignal result files
for (i in seq(0,100,10)){
  data <- read.table(paste0("results/set1/m",i,"_nanopolish-freq-perCG.tsv"), header = TRUE, sep = "\t")
  colnames(data) <- c("Chr", "Pos", paste0("m",i,".ds.freq"), paste0("m",i,".ds.cov"))
  if (i == 0){
    ds <- left_join(cpgs, data, by = c("Chr", "Pos"))
  } else {
    ds <- left_join(ds, data, by = c("Chr", "Pos"))
  }
}

ds.melt <- melt(ds, id ="Pos",measure=c("m0.ds.freq", "m10.ds.freq", "m20.ds.freq", "m30.ds.freq",
                                        "m40.ds.freq", "m50.ds.freq", "m60.ds.freq", "m70.ds.freq",
                                        "m80.ds.freq", "m90.ds.freq", "m100.ds.freq"))
levels(ds.melt$variable) <- c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%") # Rename the levels



######################### 4 ## Megalodon result files
for (i in seq(0,100,10)){
  data <- read.table(paste0("results/set1/m",i,"_megalodon-freq-perCG.tsv"), header = TRUE, sep = "\t")
  colnames(data) <- c("Chr", "Pos", paste0("m",i,".mgld.freq"), paste0("m",i,".mgld.cov"))
  if (i == 0){
    mgld <- left_join(cpgs, data, by = c("Chr", "Pos"))
  } else {
    mgld <- left_join(mgld, data, by = c("Chr", "Pos"))
  }
}

mgld.melt <- melt(mgld, id ="Pos",measure=c("m0.mgld.freq", "m10.mgld.freq", "m20.mgld.freq", "m30.mgld.freq",
                                            "m40.mgld.freq", "m50.mgld.freq", "m60.mgld.freq", "m70.mgld.freq",
                                            "m80.mgld.freq", "m90.mgld.freq", "m100.mgld.freq"))
levels(mgld.melt$variable) <- c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%") # Rename the levels



######################### 5 ## Tombo result files
for (i in seq(0,100,10)){
  data <- read.table(paste0("results/set1/m",i,"_tombo-freq-perCG.tsv"), header = TRUE, sep = "\t")
  colnames(data) <- c("Chr", "Pos", paste0("m",i,".tb.freq"), paste0("m",i,".tb.cov"))
  if (i == 0){
    tb <- left_join(cpgs, data, by = c("Chr", "Pos"))
  } else {
    tb <- left_join(tb, data, by = c("Chr", "Pos"))
  }
}

tb.melt <-  melt(tb, id ="Pos",measure=c("m0.tb.freq", "m10.tb.freq", "m20.tb.freq", "m30.tb.freq",
                                         "m40.tb.freq", "m50.tb.freq", "m60.tb.freq", "m70.tb.freq",
                                         "m80.tb.freq", "m90.tb.freq", "m100.tb.freq"))
levels(tb.melt$variable) <- c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%") # Rename the levels



######################### 6 ## Guppy result files
for (i in seq(0,100,10)){
  data <- read.table(paste0("results/set1/m",i,"_guppy-mod-basecall-refAchored-CpG-freq.tsv"), header = TRUE, sep = "\t")
  colnames(data) <- c("Chr", "Pos", paste0("m",i,".gp.freq"), paste0("m",i,".gp.cov"))
  if (i == 0){
    gp <- left_join(cpgs, data, by = c("Chr", "Pos"))
  } else {
    gp <- left_join(gp, data, by = c("Chr", "Pos"))
  }
}

gp.melt <- melt(gp, id ="Pos",measure=c("m0.gp.freq", "m10.gp.freq", "m20.gp.freq", "m30.gp.freq",
                                        "m40.gp.freq", "m50.gp.freq", "m60.gp.freq", "m70.gp.freq",
                                        "m80.gp.freq", "m90.gp.freq", "m100.gp.freq"))

levels(gp.melt$variable) <- c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%") # Rename the levels



######################### 7 ## DeepMod result files
for (i in seq(0,100,10)){
  data <- read.table(paste0("results/set1/m",i,"_deepmod-5mC.tsv"), header = TRUE, sep = "\t")
  colnames(data) <- c("Chr", "Pos", paste0("m",i,".dm.freq"), paste0("m",i,".dm.cov"))
  if (i == 0){
    dm <- left_join(cpgs, data, by = c("Chr", "Pos"))
  } else {
    dm <- left_join(dm, data, by = c("Chr", "Pos"))
  }
}

dm.melt <- melt(dm, id ="Pos",measure=c("m0.dm.freq", "m10.dm.freq", "m20.dm.freq", "m30.dm.freq",
                                        "m40.dm.freq", "m50.dm.freq", "m60.dm.freq", "m70.dm.freq",
                                        "m80.dm.freq", "m90.dm.freq", "m100.dm.freq"))

levels(dm.melt$variable) <- c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%") # Rename the levels

############################################################################################################################################
############################################################   Actual script     ###########################################################
#################################################### Combine the results from different tools ##############################################
############################################################################################################################################
 
np.melt$Method <- "Nanopolish"
ds.melt$Method <- "DeepSignal"
mgld.melt$Method <- "Megalodon"
tb.melt$Method <- "Tombo"
gp.melt$Method <- "Guppy"
dm.melt$Method <- "DeepMod"

data <- bind_rows(np.melt, ds.melt, mgld.melt, tb.melt, gp.melt, dm.melt)
#str(data)
#levels(data$variable)
levels(data$variable) <- c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%") # Rename the levels

data$Method <- factor(data$Method,
                      levels = c('Nanopolish','DeepSignal', "Megalodon", "Tombo", "Guppy", "DeepMod"), ordered = TRUE)


# Create a new column of the set name without % character
data$Truth <- str_replace_all(data$variable, "[[:punct:]]", "")
data$Truth <- as.numeric(as.character(data$Truth))
data$Truth <- data$Truth/100


############################################
############ r, r-squared, RMSE ############
############################################

################# Pearson Correlation
getRvalue <- function(Tool){
  cor.test(data[data$Method == Tool,"value"], data[data$Method == Tool,"Truth"])
  r <- sprintf(cor(data[data$Method == Tool,"value"], data[data$Method == Tool,"Truth"], use="complete.obs"), fmt = "%.4f")
  return(r)
}

r.np <- getRvalue("Nanopolish")
r.ds <- getRvalue("DeepSignal")
r.mgld <- getRvalue("Megalodon")
r.tb <- getRvalue("Tombo")
r.gp <- getRvalue("Guppy")
r.dm <- getRvalue("DeepMod")

################# Coefficient of determination 
getRsquared <- function(Tool){
  lm <- lm(data[data$Method == Tool,"value"]~data[data$Method == Tool,"Truth"])
  lm.data <- summary(lm)
  r.squared <- sprintf(lm.data$r.squared, fmt = "%.4f")
  return(r.squared)
}

rsq.np <- getRsquared("Nanopolish")
rsq.ds <- getRsquared("DeepSignal")
rsq.mgld <- getRsquared("Megalodon")
rsq.tb <- getRsquared("Tombo")
rsq.gp <- getRsquared("Guppy")
rsq.dm <- getRsquared("DeepMod")

################## RMSE
getRMSE <- function(Tool){
  RMSE <- sprintf(sqrt(mean((data[data$Method == Tool,"value"] - data[data$Method == Tool,"Truth"])^2, na.rm=TRUE)), fmt = "%.4f")
  return(RMSE)
}

RMSE.np <- getRMSE("Nanopolish")
RMSE.ds <- getRMSE("DeepSignal")
RMSE.mgld <- getRMSE("Megalodon")
RMSE.tb <- getRMSE("Tombo")
RMSE.gp <- getRMSE("Guppy")
RMSE.dm <- getRMSE("DeepMod")



#################################################################################################################################################
##################################    Violin plot showing the distribution with r-value, r-squared and RMSE    ##################################
#################################################################################################################################################

# Save as png with 2500x1300 dimensions
ggplot(data, aes(x=variable, y=value, fill=Method)) + 
  geom_point(aes(color=Method), shape=20, stroke=0.5, size=2,
             position=position_dodge2(w=.95), alpha=0.4) +
  geom_violin(aes(fill=Method), colour="#808088", trim =TRUE, scale="width", alpha=0.5, position="dodge") +
  geom_smooth(method="lm", se=FALSE, aes(group=Method, color=factor(Method)), size=1, linetype="longdash") +
  theme_bw() +
  xlab("Methylated sets (Mixture dataset 1)") +
  ylab("Predicted methylation frequency") +
  scale_x_discrete(limits=c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%")) +
  scale_y_continuous(limits=c(0.0,1.0), breaks=seq(0.0,1.0,0.2), expand = c(0.02,0)) +
  theme(axis.text = element_text(size=24),
        axis.title.x = element_text(size=24, margin = margin(t = 8, r = 0, b = 0, l = 0)),
        axis.title.y = element_text(size=24, margin = margin(t = 0, r = 8, b = 0, l = 0)),
        legend.text = element_text(size=18),
        legend.title = element_blank(),
        axis.ticks.x = element_blank(),
        legend.position = c(0.99,0.01),
        legend.justification = c(1,0), 
        legend.background = element_blank(),
        legend.box.background = element_rect(colour = "grey"),
        legend.spacing = unit(0.5,"cm"),
        legend.text.align = 0)+
  scale_fill_manual(name="Tools", values = c("DeepSignal"="#3a5fcd", "Megalodon"="#229954", "Guppy"="#D4AC0D", 
                                             "Nanopolish"="#D30000", "Tombo"="#CC79A7", "DeepMod" ="#660099"),
                    labels =c(Nanopolish=bquote("Nanopolish ("~italic(r)~ "=" ~.(r.np)~", "~italic(r)^2~"="~.(rsq.np)~", RMSE = "~.(RMSE.np)~")"), 
                              DeepSignal=bquote("DeepSignal ("~italic(r)~ "=" ~.(r.ds)~", "~italic(r)^2~"="~.(rsq.ds)~", RMSE = "~.(RMSE.ds)~")"),
                              Megalodon=bquote("Megalodon ("~italic(r)~ "=" ~.(r.mgld)~", "~italic(r)^2~"="~.(rsq.mgld)~", RMSE = "~.(RMSE.mgld)~")"),
                              Tombo=bquote("Tombo ("~italic(r)~ "=" ~.(r.tb)~", "~italic(r)^2~"="~.(rsq.tb)~", RMSE = "~.(RMSE.tb)~")"),
                              Guppy=bquote("Guppy ("~italic(r)~ "=" ~.(r.gp)~", "~italic(r)^2~"="~.(rsq.gp)~", RMSE = "~.(RMSE.gp)~")"),
                              DeepMod=bquote("DeepMod ("~italic(r)~ "=" ~.(r.dm)~", "~italic(r)^2~"="~.(rsq.dm)~", RMSE = "~.(RMSE.dm)~")")))+
  scale_color_manual(name="Tools", values = c("DeepSignal"="#3a5fcd", "Guppy"="#D4AC0D", "Megalodon"= "#229954", 
                                              "Nanopolish"="#D30000", "Tombo"="#CC79A7", "DeepMod" ="#660099"),
                     labels =c(Nanopolish=bquote("Nanopolish ("~italic(r)~ "=" ~.(r.np)~", "~italic(r)^2~"="~.(rsq.np)~", RMSE = "~.(RMSE.np)~")"), 
                               DeepSignal=bquote("DeepSignal ("~italic(r)~ "=" ~.(r.ds)~", "~italic(r)^2~"="~.(rsq.ds)~", RMSE = "~.(RMSE.ds)~")"),
                               Megalodon=bquote("Megalodon ("~italic(r)~ "=" ~.(r.mgld)~", "~italic(r)^2~"="~.(rsq.mgld)~", RMSE = "~.(RMSE.mgld)~")"),
                               Tombo=bquote("Tombo ("~italic(r)~ "=" ~.(r.tb)~", "~italic(r)^2~"="~.(rsq.tb)~", RMSE = "~.(RMSE.tb)~")"),
                               Guppy=bquote("Guppy ("~italic(r)~ "=" ~.(r.gp)~", "~italic(r)^2~"="~.(rsq.gp)~", RMSE = "~.(RMSE.gp)~")"),
                               DeepMod=bquote("DeepMod ("~italic(r)~ "=" ~.(r.dm)~", "~italic(r)^2~"="~.(rsq.dm)~", RMSE = "~.(RMSE.dm)~")")))



########################################################################################################################################### 
######################################################### Barplot showing %sites outside the 10% window ###################################
########################################################################################################################################### 
#str(data)
# Create two new columns (low_bin and high_bin)
data[data$variable =="0%", "low_bin"] <- 0
data[data$variable =="0%", "high_bin"] <- 5
data[data$variable =="10%", "low_bin"] <- 5
data[data$variable =="10%", "high_bin"] <- 15
data[data$variable =="20%", "low_bin"] <- 15
data[data$variable =="20%", "high_bin"] <- 25
data[data$variable =="30%", "low_bin"] <- 25
data[data$variable =="30%", "high_bin"] <- 35
data[data$variable =="40%", "low_bin"] <- 35
data[data$variable =="40%", "high_bin"] <- 45
data[data$variable =="50%", "low_bin"] <- 45
data[data$variable =="50%", "high_bin"] <- 55
data[data$variable =="60%", "low_bin"] <- 55
data[data$variable =="60%", "high_bin"] <- 65
data[data$variable =="70%", "low_bin"] <- 65
data[data$variable =="70%", "high_bin"] <- 75
data[data$variable =="80%", "low_bin"] <- 75
data[data$variable =="80%", "high_bin"] <- 85
data[data$variable =="90%", "low_bin"] <- 85
data[data$variable =="90%", "high_bin"] <- 95
data[data$variable =="100%", "low_bin"] <- 95
data[data$variable =="100%", "high_bin"] <- 100

data$value <- data$value*100
data <- data %>% mutate(window = if_else(value >= low_bin & value <= high_bin, "within", "outside"))

#levels(data$variable)
#levels(data$Method)
#str(data)

# Nanopolish
outside.np.s <- c(sum(data[data$variable =="0%" & data$Method =="Nanopolish",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="10%" & data$Method =="Nanopolish",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="20%" & data$Method =="Nanopolish",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="30%" & data$Method =="Nanopolish",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="40%" & data$Method =="Nanopolish",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="50%" & data$Method =="Nanopolish",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="60%" & data$Method =="Nanopolish",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="70%" & data$Method =="Nanopolish",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="80%" & data$Method =="Nanopolish",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="90%" & data$Method =="Nanopolish",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="100%" & data$Method =="Nanopolish",]$window == "outside", na.rm = TRUE))

# Deepsignal
outside.ds.s <- c(sum(data[data$variable =="0%" & data$Method =="DeepSignal",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="10%" & data$Method =="DeepSignal",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="20%" & data$Method =="DeepSignal",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="30%" & data$Method =="DeepSignal",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="40%" & data$Method =="DeepSignal",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="50%" & data$Method =="DeepSignal",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="60%" & data$Method =="DeepSignal",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="70%" & data$Method =="DeepSignal",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="80%" & data$Method =="DeepSignal",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="90%" & data$Method =="DeepSignal",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="100%" & data$Method =="DeepSignal",]$window == "outside", na.rm = TRUE))

# Megalodon
outside.mgld.s <- c(sum(data[data$variable =="0%" & data$Method =="Megalodon",]$window == "outside", na.rm = TRUE),
                    sum(data[data$variable =="10%" & data$Method =="Megalodon",]$window == "outside", na.rm = TRUE),
                    sum(data[data$variable =="20%" & data$Method =="Megalodon",]$window == "outside", na.rm = TRUE),
                    sum(data[data$variable =="30%" & data$Method =="Megalodon",]$window == "outside", na.rm = TRUE),
                    sum(data[data$variable =="40%" & data$Method =="Megalodon",]$window == "outside", na.rm = TRUE),
                    sum(data[data$variable =="50%" & data$Method =="Megalodon",]$window == "outside", na.rm = TRUE),
                    sum(data[data$variable =="60%" & data$Method =="Megalodon",]$window == "outside", na.rm = TRUE),
                    sum(data[data$variable =="70%" & data$Method =="Megalodon",]$window == "outside", na.rm = TRUE),
                    sum(data[data$variable =="80%" & data$Method =="Megalodon",]$window == "outside", na.rm = TRUE),
                    sum(data[data$variable =="90%" & data$Method =="Megalodon",]$window == "outside", na.rm = TRUE),
                    sum(data[data$variable =="100%" & data$Method =="Megalodon",]$window == "outside", na.rm = TRUE))

# Tombo
outside.tb.s <- c(sum(data[data$variable =="0%" & data$Method =="Tombo",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="10%" & data$Method =="Tombo",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="20%" & data$Method =="Tombo",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="30%" & data$Method =="Tombo",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="40%" & data$Method =="Tombo",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="50%" & data$Method =="Tombo",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="60%" & data$Method =="Tombo",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="70%" & data$Method =="Tombo",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="80%" & data$Method =="Tombo",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="90%" & data$Method =="Tombo",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="100%" & data$Method =="Tombo",]$window == "outside", na.rm = TRUE))

# GUppy
outside.gp.s <- c(sum(data[data$variable =="0%" & data$Method =="Guppy",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="10%" & data$Method =="Guppy",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="20%" & data$Method =="Guppy",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="30%" & data$Method =="Guppy",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="40%" & data$Method =="Guppy",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="50%" & data$Method =="Guppy",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="60%" & data$Method =="Guppy",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="70%" & data$Method =="Guppy",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="80%" & data$Method =="Guppy",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="90%" & data$Method =="Guppy",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="100%" & data$Method =="Guppy",]$window == "outside", na.rm = TRUE)) 

# DeepMod
outside.dm.s <- c(sum(data[data$variable =="0%" & data$Method =="DeepMod",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="10%" & data$Method =="DeepMod",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="20%" & data$Method =="DeepMod",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="30%" & data$Method =="DeepMod",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="40%" & data$Method =="DeepMod",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="50%" & data$Method =="DeepMod",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="60%" & data$Method =="DeepMod",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="70%" & data$Method =="DeepMod",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="80%" & data$Method =="DeepMod",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="90%" & data$Method =="DeepMod",]$window == "outside", na.rm = TRUE),
                  sum(data[data$variable =="100%" & data$Method =="DeepMod",]$window == "outside", na.rm = TRUE))

sets <- c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%")
disp <- data.frame(sets,outside.np.s,outside.ds.s,outside.mgld.s,outside.tb.s,outside.gp.s,outside.dm.s) # Combine
#str(disp)
disp.melt <- reshape2::melt(disp, id="sets", measure=c("outside.np.s","outside.ds.s","outside.mgld.s",
                                                       "outside.tb.s", "outside.gp.s", "outside.dm.s"))

#str(disp.melt)
#levels(disp.melt$variable)
levels(disp.melt$variable) <- c("Nanopolish","DeepSignal","Megalodon", "Tombo", "Guppy", "DeepMod") # Rename the levels

#levels(disp.melt$sets)
disp.melt$sets <- factor(disp.melt$sets, levels = c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%")) # Reorder the levels


# Plot
# Save as png with 2500x500 dimensions
ggplot(disp.melt, aes(x=sets, y=value, fill=variable)) + 
  theme_classic() +
  geom_bar(stat="identity", position=position_dodge(0.89), width=0.89, alpha=.9)+
  geom_text(aes(label=value), vjust=-0.3, hjust=0.5, color="#282828",
            position=position_dodge(0.89), size=5) +
  scale_y_continuous(name="Percentage", 
                     limits=c(0, 100), breaks=seq(0,100,20), expand = expansion(mult=c(0, 0.1))) +
  xlab("Methylated sets (Mixture dataset 1)") +
  theme(axis.text = element_text(size = 20),
        axis.title.x = element_text(size = 20, margin = margin(t = 8, r = 0, b = 0, l = 0)),
        axis.title.y = element_text(size = 20, margin = margin(t = 0, r = 8, b = 0, l = 0)),
        legend.text = element_text(size =20),
        legend.title = element_blank(),
        legend.position ="bottom",
        plot.title = element_text(hjust = 0.5, size=20, face="bold", margin = margin(t = 10, r = 0, b = 10, l = 0))) +
  scale_fill_manual(name="Tools",
                    values = c("DeepSignal"="#7e9acf","Megalodon"= "#229954", "Nanopolish"="#9c4b5e",
                               "Tombo"="#CC79A7", "Guppy"="#D4AC0D", "DeepMod" ="#771fa3")) +
  ggtitle("Proportion of sites outside the 10% window") +
  guides(fill = guide_legend(nrow = 1))


################################################################################################################################################
############################################################# PloT TP and TN ###################################################################
################################################################################################################################################

# Nanopolish
tn.np <- c(sum(np$m0.np.freq == 0.0, na.rm = TRUE),
           sum(np$m0.np.freq< 0.1, na.rm = TRUE),
           sum(np$m0.np.freq< 0.2, na.rm = TRUE),
           sum(np$m0.np.freq< 0.3, na.rm = TRUE),
           sum(np$m0.np.freq< 0.4, na.rm = TRUE),
           sum(np$m0.np.freq < 0.5, na.rm = TRUE),
           sum(np$m0.np.freq < 0.6, na.rm = TRUE),
           sum(np$m0.np.freq < 0.7, na.rm = TRUE),
           sum(np$m0.np.freq < 0.8, na.rm = TRUE),
           sum(np$m0.np.freq < 0.9, na.rm = TRUE),
           sum(np$m0.np.freq < 1.0, na.rm = TRUE))
tp.np <- c(sum(np$m100.np.freq == 1, na.rm = TRUE),
           sum(np$m100.np.freq > 0.9, na.rm = TRUE),
           sum(np$m100.np.freq > 0.8, na.rm = TRUE),
           sum(np$m100.np.freq > 0.7, na.rm = TRUE),
           sum(np$m100.np.freq > 0.6, na.rm = TRUE),
           sum(np$m100.np.freq > 0.5, na.rm = TRUE), 
           sum(np$m100.np.freq> 0.4, na.rm = TRUE), 
           sum(np$m100.np.freq> 0.3, na.rm = TRUE),
           sum(np$m100.np.freq> 0.2, na.rm = TRUE),
           sum(np$m100.np.freq> 0.1, na.rm = TRUE),
           sum(np$m100.np.freq> 0.0, na.rm = TRUE))

# DeepSignal
tn.ds <- c(sum(ds$m0.ds.freq == 0.0, na.rm = TRUE),
           sum(ds$m0.ds.freq< 0.1, na.rm = TRUE),
           sum(ds$m0.ds.freq< 0.2, na.rm = TRUE),
           sum(ds$m0.ds.freq< 0.3, na.rm = TRUE),
           sum(ds$m0.ds.freq< 0.4, na.rm = TRUE),
           sum(ds$m0.ds.freq < 0.5, na.rm = TRUE),
           sum(ds$m0.ds.freq < 0.6, na.rm = TRUE),
           sum(ds$m0.ds.freq < 0.7, na.rm = TRUE),
           sum(ds$m0.ds.freq < 0.8, na.rm = TRUE),
           sum(ds$m0.ds.freq < 0.9, na.rm = TRUE),
           sum(ds$m0.ds.freq < 1.0, na.rm = TRUE))
tp.ds <- c(sum(ds$m100.ds.freq == 1, na.rm = TRUE),
           sum(ds$m100.ds.freq > 0.9, na.rm = TRUE),
           sum(ds$m100.ds.freq > 0.8, na.rm = TRUE),
           sum(ds$m100.ds.freq > 0.7, na.rm = TRUE),
           sum(ds$m100.ds.freq > 0.6, na.rm = TRUE),
           sum(ds$m100.ds.freq > 0.5, na.rm = TRUE), 
           sum(ds$m100.ds.freq> 0.4, na.rm = TRUE), 
           sum(ds$m100.ds.freq> 0.3, na.rm = TRUE),
           sum(ds$m100.ds.freq> 0.2, na.rm = TRUE),
           sum(ds$m100.ds.freq> 0.1, na.rm = TRUE),
           sum(ds$m100.ds.freq> 0.0, na.rm = TRUE))

# Megalodon
tn.mgld <- c(sum(mgld$m0.mgld.freq == 0.0, na.rm = TRUE),
             sum(mgld$m0.mgld.freq< 0.1, na.rm = TRUE),
             sum(mgld$m0.mgld.freq< 0.2, na.rm = TRUE),
             sum(mgld$m0.mgld.freq< 0.3, na.rm = TRUE),
             sum(mgld$m0.mgld.freq< 0.4, na.rm = TRUE),
             sum(mgld$m0.mgld.freq < 0.5, na.rm = TRUE),
             sum(mgld$m0.mgld.freq < 0.6, na.rm = TRUE),
             sum(mgld$m0.mgld.freq < 0.7, na.rm = TRUE),
             sum(mgld$m0.mgld.freq < 0.8, na.rm = TRUE),
             sum(mgld$m0.mgld.freq < 0.9, na.rm = TRUE),
             sum(mgld$m0.mgld.freq < 1.0, na.rm = TRUE))
tp.mgld <- c(sum(mgld$m100.mgld.freq == 1, na.rm = TRUE),
             sum(mgld$m100.mgld.freq > 0.9, na.rm = TRUE),
             sum(mgld$m100.mgld.freq > 0.8, na.rm = TRUE),
             sum(mgld$m100.mgld.freq > 0.7, na.rm = TRUE),
             sum(mgld$m100.mgld.freq > 0.6, na.rm = TRUE),
             sum(mgld$m100.mgld.freq > 0.5, na.rm = TRUE), 
             sum(mgld$m100.mgld.freq> 0.4, na.rm = TRUE), 
             sum(mgld$m100.mgld.freq> 0.3, na.rm = TRUE),
             sum(mgld$m100.mgld.freq> 0.2, na.rm = TRUE),
             sum(mgld$m100.mgld.freq> 0.1, na.rm = TRUE),
             sum(mgld$m100.mgld.freq> 0.0, na.rm = TRUE))

# Tombo
tn.tb <- c(sum(tb$m0.tb.freq == 0.0, na.rm = TRUE),
           sum(tb$m0.tb.freq< 0.1, na.rm = TRUE),
           sum(tb$m0.tb.freq< 0.2, na.rm = TRUE),
           sum(tb$m0.tb.freq< 0.3, na.rm = TRUE),
           sum(tb$m0.tb.freq< 0.4, na.rm = TRUE),
           sum(tb$m0.tb.freq < 0.5, na.rm = TRUE),
           sum(tb$m0.tb.freq < 0.6, na.rm = TRUE),
           sum(tb$m0.tb.freq < 0.7, na.rm = TRUE),
           sum(tb$m0.tb.freq < 0.8, na.rm = TRUE),
           sum(tb$m0.tb.freq < 0.9, na.rm = TRUE),
           sum(tb$m0.tb.freq < 1.0, na.rm = TRUE))
tp.tb <- c(sum(tb$m100.tb.freq == 1, na.rm = TRUE),
           sum(tb$m100.tb.freq > 0.9, na.rm = TRUE),
           sum(tb$m100.tb.freq > 0.8, na.rm = TRUE),
           sum(tb$m100.tb.freq > 0.7, na.rm = TRUE),
           sum(tb$m100.tb.freq > 0.6, na.rm = TRUE),
           sum(tb$m100.tb.freq > 0.5, na.rm = TRUE), 
           sum(tb$m100.tb.freq> 0.4, na.rm = TRUE), 
           sum(tb$m100.tb.freq> 0.3, na.rm = TRUE),
           sum(tb$m100.tb.freq> 0.2, na.rm = TRUE),
           sum(tb$m100.tb.freq> 0.1, na.rm = TRUE),
           sum(tb$m100.tb.freq> 0.0, na.rm = TRUE))

# Guppy
tn.gp <- c(sum(gp$m0.gp.freq == 0.0, na.rm = TRUE),
           sum(gp$m0.gp.freq< 0.1, na.rm = TRUE),
           sum(gp$m0.gp.freq< 0.2, na.rm = TRUE),
           sum(gp$m0.gp.freq< 0.3, na.rm = TRUE),
           sum(gp$m0.gp.freq< 0.4, na.rm = TRUE),
           sum(gp$m0.gp.freq < 0.5, na.rm = TRUE),
           sum(gp$m0.gp.freq < 0.6, na.rm = TRUE),
           sum(gp$m0.gp.freq < 0.7, na.rm = TRUE),
           sum(gp$m0.gp.freq < 0.8, na.rm = TRUE),
           sum(gp$m0.gp.freq < 0.9, na.rm = TRUE),
           sum(gp$m0.gp.freq < 1.0, na.rm = TRUE))
tp.gp <- c(sum(gp$m100.gp.freq == 1, na.rm = TRUE),
           sum(gp$m100.gp.freq > 0.9, na.rm = TRUE),
           sum(gp$m100.gp.freq > 0.8, na.rm = TRUE),
           sum(gp$m100.gp.freq > 0.7, na.rm = TRUE),
           sum(gp$m100.gp.freq > 0.6, na.rm = TRUE),
           sum(gp$m100.gp.freq > 0.5, na.rm = TRUE), 
           sum(gp$m100.gp.freq> 0.4, na.rm = TRUE), 
           sum(gp$m100.gp.freq> 0.3, na.rm = TRUE),
           sum(gp$m100.gp.freq> 0.2, na.rm = TRUE),
           sum(gp$m100.gp.freq> 0.1, na.rm = TRUE),
           sum(gp$m100.gp.freq> 0.0, na.rm = TRUE))

# DeepMod
tn.dm <- c(sum(dm$m0.dm.freq == 0.0, na.rm = TRUE),
           sum(dm$m0.dm.freq< 0.1, na.rm = TRUE),
           sum(dm$m0.dm.freq< 0.2, na.rm = TRUE),
           sum(dm$m0.dm.freq< 0.3, na.rm = TRUE),
           sum(dm$m0.dm.freq< 0.4, na.rm = TRUE),
           sum(dm$m0.dm.freq < 0.5, na.rm = TRUE),
           sum(dm$m0.dm.freq < 0.6, na.rm = TRUE),
           sum(dm$m0.dm.freq < 0.7, na.rm = TRUE),
           sum(dm$m0.dm.freq < 0.8, na.rm = TRUE),
           sum(dm$m0.dm.freq < 0.9, na.rm = TRUE),
           sum(dm$m0.dm.freq < 1.0, na.rm = TRUE))
tp.dm <- c(sum(dm$m100.dm.freq == 1, na.rm = TRUE),
           sum(dm$m100.dm.freq > 0.9, na.rm = TRUE),
           sum(dm$m100.dm.freq > 0.8, na.rm = TRUE),
           sum(dm$m100.dm.freq > 0.7, na.rm = TRUE),
           sum(dm$m100.dm.freq > 0.6, na.rm = TRUE),
           sum(dm$m100.dm.freq > 0.5, na.rm = TRUE), 
           sum(dm$m100.dm.freq> 0.4, na.rm = TRUE), 
           sum(dm$m100.dm.freq> 0.3, na.rm = TRUE),
           sum(dm$m100.dm.freq> 0.2, na.rm = TRUE),
           sum(dm$m100.dm.freq> 0.1, na.rm = TRUE),
           sum(dm$m100.dm.freq> 0.0, na.rm = TRUE))


####################################################
####### plot TN in unmethylated (m0) subset ########
####################################################

unmethyl.freq.bin <- c("=0.0","<0.1","<0.2","<0.3","<0.4","<0.5","<0.6","<0.7","<0.8","<0.9", "<1.0")
tn <- data.frame(unmethyl.freq.bin, tn.np, tn.ds, tn.mgld, tn.tb, tn.gp, tn.dm) # No. of TN by frequency thresholds
#str(tn)
tn.melt <- melt(tn, id="unmethyl.freq.bin",measure=c("tn.np", "tn.ds", "tn.mgld", "tn.tb", "tn.gp", "tn.dm"))
#str(tn.melt)
#levels(tn.melt$variable)
levels(tn.melt$variable) <- c("Nanopolish","DeepSignal","Megalodon", "Tombo", "Guppy", "DeepMod") # Rename the levels
#levels(tn.melt$unmethyl.freq.bin)
tn.melt$unmethyl.freq.bin <- 
  factor(tn.melt$unmethyl.freq.bin, levels = c("=0.0","<0.1","<0.2","<0.3","<0.4","<0.5","<0.6","<0.7","<0.8","<0.9", "<1.0")) # Reorder the levels


# Save as png with 2500x500 dimensions
ggplot(tn.melt, aes(x=unmethyl.freq.bin, y=value, fill=variable)) + 
  theme_classic() +
  geom_bar(stat="identity", position=position_dodge(0.89), width=0.89, alpha=.9) +
  geom_text(aes(label=value), vjust=-0.3, hjust=0.5, color="#282828",
            position = position_dodge(0.89), size=5) +
  scale_y_continuous(name = "Number of CpG sites", limits = c(0, 105), breaks=seq(0,105,20), expand = expansion(mult = c(0, 0.1))) +
  xlab("Methylation frequency threshold") +
  theme(axis.text = element_text(size = 20),
        axis.title.x = element_text(size = 20, margin = margin(t = 8, r = 0, b = 0, l = 0)),
        axis.title.y = element_text(size = 20, margin = margin(t = 0, r = 8, b = 0, l = 0)),
        legend.text = element_text(size = 20),
        legend.title = element_blank(),
        legend.position ="bottom",
        plot.title = element_text(hjust = 0.5, size=20, face="bold", margin = margin(t = 10, r = 0, b = 10, l = 0)),
        plot.subtitle = element_text(hjust = 0.5))+
  scale_fill_manual(name="Tools",values = c("DeepSignal"="#7e9acf", "Megalodon"="#229954", "Nanopolish"="#9c4b5e",
                                            "Tombo"="#CC79A7", "Guppy"="#D4AC0D", "DeepMod"="#660099")) +
  ggtitle("True negatives") +
  guides(fill = guide_legend(nrow = 1))

######################################################
####### plot TP in unmethylated (m100) subset ########
######################################################

methyl.freq.bin <- c("=1.0",">0.9",">0.8",">0.7",">0.6",">0.5",">0.4",">0.3",">0.2",">0.1", ">0.0")
fn <- data.frame(methyl.freq.bin, tp.np, tp.ds, tp.mgld, tp.tb, tp.gp, tp.dm)
#str(fn)
tp.melt <- reshape2::melt(fn, id="methyl.freq.bin",measure=c("tp.np", "tp.ds", "tp.mgld", "tp.tb", "tp.gp", "tp.dm"))
#str(tp.melt)
#levels(tp.melt$variable)
levels(tp.melt$variable) <- c("Nanopolish","DeepSignal","Megalodon","Tombo", "Guppy", "DeepMod") # Rename the levels
#levels(tp.melt$methyl.freq.bin)
tp.melt$methyl.freq.bin <- 
  factor(tp.melt$methyl.freq.bin, levels = c("=1.0",">0.9",">0.8",">0.7",">0.6",">0.5",">0.4",">0.3",">0.2",">0.1",">0.0")) # Reorder the levels


# Save as png with 2500x500 dimensions
ggplot(tp.melt, aes(x=methyl.freq.bin, y=value, fill=variable)) + 
  theme_classic() +
  geom_bar(stat="identity", position=position_dodge(0.89), width=0.89, alpha=.9) +
  geom_text(aes(label=value), vjust=-0.3, hjust=0.5, color="#282828",
            position = position_dodge(0.89), size=5) +
  scale_y_continuous(name = "Number of CpG sites", limits = c(0, 105), breaks=seq(0,105,20), expand = expansion(mult=c(0, 0.1))) +
  xlab("Methylation frequency threshold") +
  theme(axis.text = element_text(size = 20),
        axis.title.x = element_text(size = 20, margin = margin(t = 8, r = 0, b = 0, l = 0)),
        axis.title.y = element_text(size = 20, margin = margin(t = 0, r = 8, b = 0, l = 0)),
        legend.text = element_text(size = 20),
        legend.title = element_blank(),
        legend.position ="bottom",
        plot.title = element_text(hjust = 0.5, size=20, face="bold", margin = margin(t = 10, r = 0, b = 10, l = 0)),
        plot.subtitle = element_text(hjust = 0.5)) +
  scale_fill_manual(name="Tools", values = c("DeepSignal"="#7e9acf", "Megalodon"="#229954", "Nanopolish"="#9c4b5e",
                                            "Tombo"="#CC79A7", "Guppy"="#D4AC0D", "DeepMod"="#660099")) +
  ggtitle("True positives") +
  guides(fill = guide_legend(nrow = 1))



#######################################################################################################################################################
################################################ Per-site performance for each tool ###################################################################
####################### accuracy, specificity , precision, recall and error rate using two different methylation frequency thresholds #################
#######################################################################################################################################################
scale.un.less.than <- c(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9) # classified as unmethylated if predicted methylation frequency was less than...
scale.m.more.than <- c(0.9,0.8,0.7,0.6,0.5,0.4,0.3,0.2,0.1) # classified as methylated if predicted methylation frequency was greater than...
scale <- data.frame(scale.un.less.than, scale.m.more.than)
#str(scale)

x <- NULL
bin <- data.frame(x)

#################################################################
####### Replace np with ds/mgld/tb/gp/dm for other tools ########
#################################################################
# For Nanopolish
for (i in 1:nrow(scale)) {
  thres0 <- scale[i, "scale.un.less.than"]
  thres1 <- scale[i, "scale.m.more.than"]
  
  TN <- sum(np$m0.np.freq < thres0, na.rm = TRUE)
  FP <- sum(!is.na(np$m0.np.freq))-sum(np$m0.np.freq < thres0, na.rm = TRUE)
  TP <- sum(np$m100.np.freq > thres1)
  FN <- sum(!is.na(np$m100.np.freq))-sum(np$m100.np.freq > thres1)
  
  accuracy <- (TN+TP)/(sum(!is.na(np$m0.np.freq))+sum(!is.na(np$m100.np.freq)))
  specificity <-  TN/(TN+FP)
  precision <- TP/(TP+FP) # = Positive predictive value
  recall <- TP/(TP+FN) # = True positive rate
  error <- (FP+FN)/(sum(!is.na(np$m0.np.freq))+sum(!is.na(np$m100.np.freq)))
  
  performance.value <- list(thres0, thres1, accuracy, specificity, precision, recall, error)
  if(i == 1){
    performance.np <- data.frame(performance.value, stringsAsFactors = F)
  } else {
    performance.np  <- rbind(performance.np, performance.value)
  }
}

colnames(performance.np) <- c("Unmethylated if freq <","Methylated if freq >",
                              "Accuracy","Specificity","Precision","Recall","Error rate")
str(performance.np)