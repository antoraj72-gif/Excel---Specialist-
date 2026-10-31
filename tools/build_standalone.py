# Builds Excel Specialist.html: index.html with every library inlined (no libs folder needed)
import re
import os
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))+'/'
html=open(R+'index.html',encoding='utf-8').read()
import base64
LOADER='<script>/* unpacks libraries stored as base64 (their text would confuse the HTML parser) */window.__caramelLib=function(b){var s=atob(b),u=new Uint8Array(s.length);for(var i=0;i<s.length;i++)u[i]=s.charCodeAt(i);(0,eval)(new TextDecoder().decode(u));};</script>'
def inline(path):
    js=open(R+path,encoding='utf-8').read()
    if re.search(r'<!--|<script|</script', js, re.I):
        return '<script>/* '+path+' */__caramelLib("'+base64.b64encode(js.encode('utf-8')).decode()+'")</script>'
    return '<script>/* '+path+' */\n'+js+'\n</script>'
html=html.replace('<script src="libs/cpexcel.js"></script>', LOADER+'<script src="libs/cpexcel.js"></script>',1)
for lib in ['cpexcel.js','xlsx-js-style.min.js','jszip.min.js','jspdf.umd.min.js','jspdf.plugin.autotable.min.js','hyperformula.full.min.js','chart.umd.min.js']:
    tag='<script src="libs/%s"></script>'%lib
    assert tag in html, lib
    html=html.replace(tag, inline('libs/'+lib))
extra=''.join(inline(p) for p in ['libs/pdf.min.js','libs/pdf.worker.min.js','libs/tesseract/tesseract.min.js','libs/tesseract/ocr-worker.js','libs/tesseract/ocr-core.js','libs/tesseract/ocr-eng.js'])
html=html.replace('<style>', extra+'\n<style>',1)
html=html.replace('Keep the "libs" folder next to it.','STANDALONE EDITION: every library is built into this one file – no libs folder or internet needed.',1)
open(R+'Excel Specialist.html','w',encoding='utf-8').write(html)
print(len(html)//1024,'KB')
