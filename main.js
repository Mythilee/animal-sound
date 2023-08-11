function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier =ml5.soundClassifier('',modelReady);
}

function modelReady()
{
    classifier.classify(gotResult);
}

function gotResult(error,result)
{
    if(error)
    {
        console.error(error);
    }

    else
    {
        console.log(result);
        random_number_r=Math.floor(math.random()*255)+1;
        random_number_g=Math.floor(math.random()*255)+1;
        random_number_b=Math.floor(math.random()*255)+1;

        document.getElementById("result_label").innerHTML='I can hear - '+(result[0].label);
        document.getElementById("result_confidence").innerHTML='Accuracy - '+(result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
        img = document.getElementById('cat');
        img1 = document.getElementById('monkey');
        img2 = document.getElementById('bird');
        img3 = document.getElementById('lion');
        img4 = document.getElementById('tiger');
        img5 = document.getElementById('dog');

        if(results[0].label=="dog")
        {
            img.src='dog.gif';
            img1.src='tiger.png';
            img2.src='lion.png';
            img3.src='bird-01.png';
            img4.src='monkey.png';
            img5.src='cat.png';
        }
        
        else if(results[0].label=="tiger")
        {
            img.src='dog.png';
            img1.src='tiger.gif';
            img2.src='lion.png';
            img3.src='bird-01.png';
            img4.src='monkey.png';
            img5.src='cat.png';
        }

        else if(results[0].label=="lion")
        {
            img.src='dog.png';
            img1.src='tiger.png';
            img2.src='lion.gif';
            img3.src='bird-01.png';
            img4.src='monkey.png';
            img5.src='cat.png';
        }

        else if(results[0].label=="bird")
        {
            img.src='dog.png';
            img1.src='tiger.png';
            img2.src='lion.png';
            img3.src='bird.gif';
            img4.src='monkey.png';
            img5.src='cat.png';
        }

        else if(results[0].label=="monkey")
        {
            img.src='dog.png';
            img1.src='tiger.png';
            img2.src='lion.png';
            img3.src='bird.png';
            img4.src='monkey.gif';
            img5.src='cat.png';
        }

        else
        {
            img.src='dog.png';
            img1.src='tiger.png';
            img2.src='lion.png';
            img3.src='bird.png';
            img4.src='monkey.png';
            img5.src='cat.gif';
        }
    }
}