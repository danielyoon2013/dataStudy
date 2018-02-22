
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from matplotlib import style
import time

style.use("ggplot")

fig=plt.figure()
axl=fig.add_subplot(1,1,1)

def animate(i):
    pullData=open("C:/Users/kshee/JupyterWorks/자연어처리/finalcoinSentiment.csv",encoding='utf-8').read()
    lines=pullData.split("\n")
    
    xar=[]
    yar=[]

    x=0
    y=0
    
    for i in lines:
        x+=1
        if "Positive" in i:
            y+=1
        elif "Negative" in i:
            y-=1

        xar.append(x)
        yar.append(y)


    axl.clear()
    axl.plot(xar,yar)
    
ani=animation.FuncAnimation(fig,animate,interval=1000)
time.sleep(0.2)
plt.show()
