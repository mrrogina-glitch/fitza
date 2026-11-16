import re,sys
b=open('base.html',encoding='utf8').read()
names=['part2.js','part3.js','part4.js','part5.js','part5b.js','part5c.js','part5d.js','part5e.js','part6.js','part7.js','part8.js','part9.js','part10.js','part11.js','part12.js']+sys.argv[1:]
parts=''.join(open(f,encoding='utf8').read().rstrip()+'\n' for f in names)+'render();\n'
a='render();\n</script>\n</body>'
assert b.count(a)==1
out=b.replace(a,'render();\n</script>\n<script>\n'+parts+'</script>\n</body>')
open('index.html','w',encoding='utf8').write(out)
for i,s in enumerate(re.findall(r'<script>(.*?)</script>',out,re.S)):open('/tmp/s%d.js'%i,'w',encoding='utf8').write(s)
print(len(out))
