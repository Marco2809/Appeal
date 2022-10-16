<?php
// start cURL
error_reporting(0);
$url = 'https://parcoveicoli.autocenterarese.com/lista-veicoli/';
// start cURL
/*$ch = curl_init();
// tell cURL what the URL is
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
// tell cURL that you want the data back from that URL
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// run cURL
$output = curl_exec($ch);
// end the cURL call (this also cleans up memory so it is
// important)
curl_close($ch);
// display the output
$output = str_replace('ga-vehicles-list-items"','ga-vehicles-list-items" id="contenuto"',$output);
$output = str_replace('ga-make-model"','ga-make-model" id="model"',$output);

function getElementsByClass(&$parentNode, $tagName, $className) {
    $nodes=array();

    $childNodeList = $parentNode->getElementsByTagName($tagName);
    for ($i = 0; $i < $childNodeList->length; $i++) {
        $temp = $childNodeList->item($i);
        if (stripos($temp->getAttribute('class'), $className) !== false) {
            $nodes[]=$temp;
        }
    }

    return $nodes;
}

$dom = new DOMDocument('1.0', 'utf-8');
$dom->loadHTML($output);
$content_node=$dom->getElementsByTagName("div");

print_r($content_node);
//$div_a_class_nodes=getElementsByClass($content_node, 'div', 'a');//will contain the three nodes under "content_node".
foreach ($content_node as $book) {
    //echo $book->nodeValue, PHP_EOL;
}*/
echo '<h1>USATE</h1><br><br>';


$page = file_get_contents($url);
preg_match_all('/<div class=\"ga-make-model\">(.*?)<\/div>/s',$page,$model,PREG_SET_ORDER);
preg_match_all('/<div class=\"ga-version\">(.*?)<\/div>/s',$page,$version,PREG_SET_ORDER);
preg_match_all('/<div class=\"ga-left-column float-xl-left no-financial\">(.*?)<\/div>/s',$page,$price,PREG_SET_ORDER);
preg_match_all('/<div class=\"ga-data-text\">(.*?)<\/div>/s',$page,$data,PREG_SET_ORDER);
preg_match_all('/\<div class="ga-vehicles-list-item-image" data-echo-background="(.*?)"\>/',$page,$images,PREG_SET_ORDER);

for($i=0; $i<count($model); $i++){
    $s=($i*4);
    if($price[$i][0]=="") continue;
    echo $model[$i][0];
    echo $version[$i][0];
    echo '<img src="'.str_replace(")","",$images[$i][1]).'" width="250px">';
    echo $price[$i][0];
    echo $data[$s][0];
    echo $data[$s+1][0];
    echo $data[$s+2][0];
    echo $data[$s+3][0];

    echo "<br>";
}

echo '<br><br><h1>NOLEGGIO</h1><br><br>';

$url = "https://www.carnecting.it/offerte-noleggio/";
$page = file_get_contents($url);

preg_match_all('/<div class=\"card-rental-listing__media-heading\">(.*?)<\/div>/s',$page,$model,PREG_SET_ORDER);
preg_match_all('/<div class=\"card-rental-listing__media-link js-rental-showcase-card-link is-block\">(.*?)<\/div>/s',$page,$foto,PREG_SET_ORDER);
preg_match_all('/<div class=\"c-price__main-price c-price--align-center\">(.*?)<\/div>/s',$page,$rental,PREG_SET_ORDER);
preg_match_all('/<div class=\"a-list-item__text \">(.*?)<\/div>/s',$page,$detail,PREG_SET_ORDER);

for($i=0; $i<count($model); $i++){
    $s=($i*6);
    echo $model[$i][0];
    echo $foto[$i][0];
    echo $rental[$i][0];
    echo $detail[$s][0];
    echo $detail[$s+1][0];
    echo $detail[$s+2][0];
    echo $detail[$s+3][0];
    echo $detail[$s+4][0];
    echo "<br>";
}

?>