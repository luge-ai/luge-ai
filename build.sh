
if [ -f "dataset.md" ];then
rm -f dataset.md
echo "成功删除文件 : dataset.md"
fi

cp README.md dataset.md

vuepress build
cd build
echo 'luge.ai' > CNAME
