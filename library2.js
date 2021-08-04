var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];
    var i=0;
while(i<library.length)
{
    var binfo= " "+library[i].title+" this book written by "+library[i].author+".";
    console.log(binfo);
    if(library[i].readingStatus)
    {
        console.log("book is readed");
    }
    else{
        console.log("book is readed");
    }
    i++;
    
}    