(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(y,x,e)=>{const t=e(89),{lightningChart:a,AxisTickStrategies:r,UIElementBuilders:u,Themes:s}=t,n=a().ChartXY({}).setTitle("Product version distribution").setMouseInteractions(!0).setPadding({right:25}),o=["Jan-17","Feb-17","Mar-17","Apr-17","May-17","Jun-17","Jul-17","Aug-17","Sep-17","Oct-17","Nov-17","Dec-17"],c=(y,x)=>n.addAreaSeries().setName(`Version ${y}`).setCursorResultTableFormatter(((y,x,e,t)=>y.addRow(x.getName()).addRow("Date: ",o[parseInt(e)]).addRow("Distribution: "+t.toFixed(2)))),J=c(1),i=c(2),l=c(3),A=c(4),p=c(5),M=c(6),g=c(7),d=c(8),S=c(9),b=c(10),v=c(11),D=c(12),F=n.getDefaultAxisX().setMouseInteractions(!1).setScrollStrategy(void 0).setTickStrategy(r.Empty),N=(y,x,e)=>{y.map(((y,x)=>({x,y:y.y}))).forEach(((t,a)=>{x.add(t),e&&((y,x)=>{F.addCustomTick().setValue(x).setGridStrokeLength(0).setTextFormatter((e=>y[x].x))})(y,a)}))};N([{x:"Jan-17",y:1.3},{x:"Feb-17",y:1.1},{x:"Mar-17",y:1},{x:"Apr-17",y:.8},{x:"May-17",y:.7},{x:"Jun-17",y:.6},{x:"Jul-17",y:.6},{x:"Aug-17",y:.5},{x:"Sep-17",y:.4},{x:"Oct-17",y:.4},{x:"Nov-17",y:.3},{x:"Dec-17",y:.3}],J,!0),N([{x:"Jan-17",y:4.9},{x:"Feb-17",y:4},{x:"Mar-17",y:3.7},{x:"Apr-17",y:3.2},{x:"May-17",y:2.8},{x:"Jun-17",y:2.4},{x:"Jul-17",y:2.3},{x:"Aug-17",y:2},{x:"Sep-17",y:1.7},{x:"Oct-17",y:1.5},{x:"Nov-17",y:1.2},{x:"Dec-17",y:1.1}],i),N([{x:"Jan-17",y:6.8},{x:"Feb-17",y:5.9},{x:"Mar-17",y:5.4},{x:"Apr-17",y:4.6},{x:"May-17",y:4.1},{x:"Jun-17",y:3.5},{x:"Jul-17",y:3.3},{x:"Aug-17",y:3},{x:"Sep-17",y:2.6},{x:"Oct-17",y:2.2},{x:"Nov-17",y:1.8},{x:"Dec-17",y:1.5}],l),N([{x:"Jan-17",y:2},{x:"Feb-17",y:1.7},{x:"Mar-17",y:1.5},{x:"Apr-17",y:1.3},{x:"May-17",y:1.2},{x:"Jun-17",y:1},{x:"Jul-17",y:1},{x:"Aug-17",y:.9},{x:"Sep-17",y:.7},{x:"Oct-17",y:.6},{x:"Nov-17",y:.5},{x:"Dec-17",y:.4}],A),N([{x:"Jan-17",y:25.2},{x:"Feb-17",y:22.6},{x:"Mar-17",y:20.8},{x:"Apr-17",y:18.8},{x:"May-17",y:17.1},{x:"Jun-17",y:15.1},{x:"Jul-17",y:14.5},{x:"Aug-17",y:13.4},{x:"Sep-17",y:12},{x:"Oct-17",y:10.3},{x:"Nov-17",y:8.6},{x:"Dec-17",y:7.6}],p),N([{x:"Jan-17",y:11.3},{x:"Feb-17",y:10.1},{x:"Mar-17",y:9.4},{x:"Apr-17",y:8.7},{x:"May-17",y:7.8},{x:"Jun-17",y:7.1},{x:"Jul-17",y:6.7},{x:"Aug-17",y:6.1},{x:"Sep-17",y:5.4},{x:"Oct-17",y:4.8},{x:"Nov-17",y:3.8},{x:"Dec-17",y:3.5}],M),N([{x:"Jan-17",y:22.8},{x:"Feb-17",y:23.3},{x:"Mar-17",y:23.1},{x:"Apr-17",y:23.3},{x:"May-17",y:23.3},{x:"Jun-17",y:21.7},{x:"Jul-17",y:21},{x:"Aug-17",y:20.2},{x:"Sep-17",y:19.2},{x:"Oct-17",y:17.6},{x:"Nov-17",y:15.4},{x:"Dec-17",y:14.4}],g),N([{x:"Jan-17",y:24},{x:"Feb-17",y:29.6},{x:"Mar-17",y:31.3},{x:"Apr-17",y:31.2},{x:"May-17",y:31.8},{x:"Jun-17",y:32.2},{x:"Jul-17",y:32},{x:"Aug-17",y:29.7},{x:"Sep-17",y:28.1},{x:"Oct-17",y:25.5},{x:"Nov-17",y:22.7},{x:"Dec-17",y:21.3}],d),N([{x:"Jan-17",y:.3},{x:"Feb-17",y:.5},{x:"Mar-17",y:2.4},{x:"Apr-17",y:6.6},{x:"May-17",y:10.6},{x:"Jun-17",y:14.2},{x:"Jul-17",y:15.8},{x:"Aug-17",y:19.3},{x:"Sep-17",y:22.3},{x:"Oct-17",y:22.9},{x:"Nov-17",y:20.3},{x:"Dec-17",y:18.1}],S),N([{x:"Jan-17",y:0},{x:"Feb-17",y:.2},{x:"Mar-17",y:.4},{x:"Apr-17",y:.5},{x:"May-17",y:.9},{x:"Jun-17",y:1.6},{x:"Jul-17",y:2},{x:"Aug-17",y:4},{x:"Sep-17",y:6.2},{x:"Oct-17",y:8.2},{x:"Nov-17",y:10.5},{x:"Dec-17",y:10.1}],b),N([{x:"Jan-17",y:0},{x:"Feb-17",y:0},{x:"Mar-17",y:0},{x:"Apr-17",y:0},{x:"May-17",y:0},{x:"Jun-17",y:0},{x:"Jul-17",y:.2},{x:"Aug-17",y:.5},{x:"Sep-17",y:.8},{x:"Oct-17",y:4.9},{x:"Nov-17",y:11.4},{x:"Dec-17",y:14}],v),N([{x:"Jan-17",y:0},{x:"Feb-17",y:0},{x:"Mar-17",y:0},{x:"Apr-17",y:0},{x:"May-17",y:0},{x:"Jun-17",y:0},{x:"Jul-17",y:0},{x:"Aug-17",y:0},{x:"Sep-17",y:.3},{x:"Oct-17",y:.8},{x:"Nov-17",y:3.2},{x:"Dec-17",y:7.5}],D),n.setAutoCursor((y=>y.setResultTableAutoTextStyle(!1).setTickMarkerXVisible(!1))),n.getDefaultAxisY().setTitle("Percentage").setScrollStrategy(void 0).setInterval({start:0,end:50,stopAxisAfter:!1}).setMouseInteractions(!1)}},y=>{y.O(0,[502],(()=>(44,y(y.s=44)))),y.O()}]);