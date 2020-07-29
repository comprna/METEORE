#!/usr/bin/env Rscript

# Author: Zaka Yuen , JCSMR, ANU
# Created on July 2020

# This script is to:
# -take in input files of:
#     -the target CpG site (2 columns: Chr, Pos)
#     -modification-frequency files for each set and each tool
# -make violin plots showing the predicted methylation freq for each control mixture set with a given proportion of methylated reads

# We created 11 mixture sets containing 0%, 10%, 20%, …, 90%, and 100% of methylated reads
# and tested with six different tools
library(dplyr)
library(ggplot2)
library(reshape2)
library(stringr)
########################################################################################################
##################################  Define your input files here     ###################################
# target CpG site
cpgs <- read.table("input/100cpgs.txt", header = FALSE, sep="\t") 
colnames(cpgs) <- c("Chr", "Pos")

# Nanopolish result files
for (i in seq(0,100,10)){
  data <- read.table(paste0("input/m",i,"_nanopolish-freq-perCG.tsv"), header = TRUE, sep = "\t")
  colnames(data) <- c("Chr", "Pos", paste0("m",i,".np.freq"), paste0("m",i,".np.cov"))
  if (i == 0){
    np <- left_join(cpgs, data, by = c("Chr", "Pos"))
  } else {
    np <- left_join(np, data, by = c("Chr", "Pos"))
  }
}

# DeepSignal result files
for (i in seq(0,100,10)){
  data <- read.table(paste0("input/m",i,"_deepsignal-CpG-mods-freq.tsv"), header = TRUE, sep = "\t")
  colnames(data) <- c("Chr", "Pos", paste0("m",i,".np.freq"), paste0("m",i,".np.cov"))
  if (i == 0){
    ds <- left_join(cpgs, data, by = c("Chr", "Pos"))
  } else {
    ds <- left_join(ds, data, by = c("Chr", "Pos"))
  }
}

# Megalodon result files
for (i in seq(0,100,10)){
  data <- read.table(paste0("input/m",i,"_megalodon_freq-perCG.tsv"), header = TRUE, sep = "\t")
  colnames(data) <- c("Chr", "Pos", paste0("m",i,".np.freq"), paste0("m",i,".np.cov"))
  if (i == 0){
    mgld <- left_join(cpgs, data, by = c("Chr", "Pos"))
  } else {
    mgld <- left_join(mgld, data, by = c("Chr", "Pos"))
  }
}

# Tombo result files
for (i in seq(0,100,10)){
  data <- read.table(paste0("input/m",i,"_tombo-freqNcov.tsv"), header = TRUE, sep = "\t")
  colnames(data) <- c("Chr", "Pos", paste0("m",i,".tb.freq"), paste0("m",i,".tb.cov"))
  if (i == 0){
    tb <- left_join(cpgs, data, by = c("Chr", "Pos"))
  } else {
    tb <- left_join(tb, data, by = c("Chr", "Pos"))
  }
}

# Guppy result files
for (i in seq(0,100,10)){
  data <- read.table(paste0("input/m",i,"_guppy_freq-perCG.tsv"), header = TRUE, sep = "\t")
  colnames(data) <- c("Chr", "Pos", paste0("m",i,".gp.freq"), paste0("m",i,".gp.cov"))
  if (i == 0){
    gp <- left_join(cpgs, data, by = c("Chr", "Pos"))
  } else {
    gp <- left_join(gp, data, by = c("Chr", "Pos"))
  }
}

# DeepMod result files
for (i in seq(0,100,10)){
  data <- read.table(paste0("input/m",i,"_deepmod-5mC.tsv"), header = TRUE, sep = "\t")
  colnames(data) <- c("Chr", "Pos", paste0("m",i,".dm.freq"), paste0("m",i,".dm.cov"))
  if (i == 0){
    dm <- left_join(cpgs, data, by = c("Chr", "Pos"))
  } else {
    dm <- left_join(dm, data, by = c("Chr", "Pos"))
  }
}
#############################################################################################################
###########################################   Actual script     #############################################
np.melt <- reshape2::melt(np, id ="Pos",measure=c("m0.np.freq", "m10.np.freq", "m20.np.freq", "m30.np.freq",
                                                 "m40.np.freq", "m50.np.freq", "m60.np.freq", "m70.np.freq",
                                                 "m80.np.freq", "m90.np.freq", "m100.np.freq"))

ds.melt <- reshape2::melt(ds, id ="Pos",measure=c("m0.ds.freq", "m10.ds.freq", "m20.ds.freq", "m30.ds.freq",
                                                   "m40.ds.freq", "m50.ds.freq", "m60.ds.freq", "m70.ds.freq",
                                                   "m80.ds.freq", "m90.ds.freq", "m100.ds.freq"))

mgld.melt <- reshape2::melt(mgld, id ="Pos",measure=c("m0.mgld.freq", "m10.mgld.freq", "m20.mgld.freq", "m30.mgld.freq",
                                                       "m40.mgld.freq", "m50.mgld.freq", "m60.mgld.freq", "m70.mgld.freq",
                                                       "m80.mgld.freq", "m90.mgld.freq", "m100.mgld.freq"))

tb.melt <- reshape2::melt(tb, id ="Pos",measure=c("m0.tb.freq", "m10.tb.freq", "m20.tb.freq", "m30.tb.freq",
                                                   "m40.tb.freq", "m50.tb.freq", "m60.tb.freq", "m70.tb.freq",
                                                   "m80.tb.freq", "m90.tb.freq", "m100.tb.freq"))

gp.melt <- reshape2::melt(gp, id ="Pos",measure=c("m0.gp.freq", "m10.gp.freq", "m20.gp.freq", "m30.gp.freq",
                                                 "m40.gp.freq", "m50.gp.freq", "m60.gp.freq", "m70.gp.freq",
                                                 "m80.gp.freq", "m90.gp.freq", "m100.gp.freq"))

dm.melt <- reshape2::melt(dm, id ="Pos",measure=c("m0.dm.freq", "m10.dm.freq", "m20.dm.freq", "m30.dm.freq",
                                                   "m40.dm.freq", "m50.dm.freq", "m60.dm.freq", "m70.dm.freq",
                                                   "m80.dm.freq", "m90.dm.freq", "m100.dm.freq"))

# Rename the levels
levels(np.melt$variable) <- c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%")
levels(ds.melt$variable) <- c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%")
levels(mgld.melt$variable) <- c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%")
levels(tb.melt$variable) <- c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%")
levels(gp.melt$variable) <- c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%")
levels(dm.melt$variable) <- c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%")

np.melt$Method <- "Nanopolish"
ds.melt$Method <- "DeepSignal"
mgld.melt$Method <- "Megalodon"
tb.melt$Method <- "Tombo"
gp.melt$Method <- "Guppy"
dm.melt$Method <- "DeepMod"

sum <- bind_rows(np.melt, ds.melt, mgld.melt, tb.melt, gp.melt, dm.melt)
# Rename the levels
levels(sum$variable) <- c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%")
sum$Method <- factor(sum$Method,
                     levels = c('Nanopolish','DeepSignal', "Megalodon", "Tombo", "Guppy", "DeepMod"),ordered = TRUE)


str(sum)
# Create a new column of the set name without % character
sum$Truth <- str_replace_all(sum$variable, "[[:punct:]]", "")
sum$Truth <- as.numeric(as.character(sum$Truth))

# Pearson Correlation
getRvalue <- function(Tool){
  cor.test(sum[sum$Method == Tool,"value"], sum[sum$Method == Tool,"Truth"])
  r <- sprintf(cor(sum[sum$Method == Tool,"value"], sum[sum$Method == Tool,"Truth"], use="complete.obs"), fmt = "%.4f")
  return(r)
}
r.np <- getRvalue("Nanopolish")
r.ds <- getRvalue("DeepSignal")
r.mgld <- getRvalue("Megalodon")
r.tb <- getRvalue("Tombo")
r.gp <- getRvalue("Guppy")
r.dm <- getRvalue("DeepMod")

# Coefficient of determination 
getRsquared <- function(Tool){
  lm <- lm(sum[sum$Method == Tool,"value"]~sum[sum$Method == Tool,"Truth"])
  lm.sum <- summary(lm)
  r.squared <- sprintf(lm.sum$r.squared, fmt = "%.4f")
  return(r.squared)
}
rsq.np <- getRsquared("Nanopolish")
rsq.ds <- getRsquared("DeepSignal")
rsq.mgld <- getRsquared("Megalodon")
rsq.tb <- getRsquared("Tombo")
rsq.gp <- getRsquared("Guppy")
rsq.dm <- getRsquared("DeepMod")

# Violin plot showing the distribution with r-value and r-squared
violinPlot <- 
  ggplot(sum, aes(x=variable, y=value, fill=Method)) + 
    geom_point(aes(color=Method),shape=20, stroke =0.5, size=2,
               position = position_dodge2(w = .95), alpha=0.5)+
    geom_violin(aes(fill=Method), colour="#808088",trim = TRUE,scale="width", alpha=0.4, position="dodge") +
    geom_smooth(method = "lm", se = FALSE, aes(group=Method, color = factor(Method)), size=1, linetype = "longdash")+
    theme_bw()+
    xlab("Proportion of methylated reads")+
    ylab("Methylation frequency") +
    scale_x_discrete(limits=c("0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%"))+
    scale_y_continuous(limits=c(0.0,1.0),breaks = seq(0.0,1.0,0.2),expand = c(0.02, 0))+
    theme(axis.text = element_text(size = 12),
          axis.title.x = element_text(size = 14, margin = margin(t = 8, r = 0, b = 0, l = 0)),
          axis.title.y = element_text(size = 14, margin = margin(t = 0, r = 8, b = 0, l = 0)),
          legend.text = element_text(size = 12),
          legend.title = element_text(size = 12),
          axis.ticks.x=element_blank(),
          legend.position=c(0.9,0.105),
          legend.background = element_blank(),
          legend.box.background = element_rect(colour = "grey"),
          legend.text.align = 0)+
    scale_fill_manual(name="Tools", values = c("DeepSignal"="#3a5fcd", "Guppy"="#D4AC0D", "Megalodon"= "#229954", 
                                               "Nanopolish"="#D30000", "Tombo"="#CC79A7", "DeepMod" ="#660099"),
                      labels =c(Nanopolish=bquote("Nanopolish ("~italic(r)~ "=" ~.(r.np)~", "~italic(r)^2~"="~.(rsq.np)~")"), 
                                DeepSignal=bquote("DeepSignal ("~italic(r)~ "=" ~.(r.ds)~", "~italic(r)^2~"="~.(rsq.ds)~")"),
                                Megalodon=bquote("Megalodon ("~italic(r)~ "=" ~.(r.mgld)~", "~italic(r)^2~"="~.(rsq.mgld)~")"),
                                Tombo=bquote("Tombo ("~italic(r)~ "=" ~.(r.tb)~", "~italic(r)^2~"="~.(rsq.tb)~")"),
                                Guppy=bquote("Guppy ("~italic(r)~ "=" ~.(r.gp)~", "~italic(r)^2~"="~.(rsq.gp)~")"),
                                DeepMod=bquote("DeepMod ("~italic(r)~ "=" ~.(r.dm)~", "~italic(r)^2~"="~.(rsq.dm)~")"),
                                guide = guide_legend(label.position = "left")))+
    scale_color_manual(name="Tools", values = c("DeepSignal"="#3a5fcd", "Guppy"="#D4AC0D", "Megalodon"= "#229954", 
                                                "Nanopolish"="#D30000", "Tombo"="#CC79A7", "DeepMod" ="#660099"),
                       labels =c(Nanopolish=bquote("Nanopolish ("~italic(r)~ "=" ~.(r.np)~", "~italic(r)^2~"="~.(rsq.np)~")"), 
                                 DeepSignal=bquote("DeepSignal ("~italic(r)~ "=" ~.(r.ds)~", "~italic(r)^2~"="~.(rsq.ds)~")"),
                                 Megalodon=bquote("Megalodon ("~italic(r)~ "=" ~.(r.mgld)~", "~italic(r)^2~"="~.(rsq.mgld)~")"),
                                 Tombo=bquote("Tombo ("~italic(r)~ "=" ~.(r.tb)~", "~italic(r)^2~"="~.(rsq.tb)~")"),
                                 Guppy=bquote("Guppy ("~italic(r)~ "=" ~.(r.gp)~", "~italic(r)^2~"="~.(rsq.gp)~")"),
                                 DeepMod=bquote("DeepMod ("~italic(r)~ "=" ~.(r.dm)~", "~italic(r)^2~"="~.(rsq.dm)~")")))

# Save the plot
ggsave("violinPlot.png",violinPlot,units="cm", width=55, height=30, dpi="print")

