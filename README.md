# Multiple object detection using pre trained model in TensorFlow.js

## Difficulty: Easy

Please note: This demo loads an easy to use JavaScript class made by the TensorFlow.js team to do the hard work for you so no machine learning knowledge is needed to use it.

If you were looking to learn how to load in a TensorFlow.js saved model directly yourself then please see our tutorial on loading TensorFlow.js models

If you want to train a system to recognize your own objects, using your own data, then check out our tutorials on "transfer learning".

## What can this demo do?

This demo shows how we can use a pre made machine learning solution to recognize multiple objects (yes, more than one at a time!) on any image you wish to present to it. Even better, not only do we know that the image contains an object, but we can also get the co-ordinates of the bounding box for each object it finds, which allows you to highlight the found object in the image. 

For this demo we are loading a model using the ImageNet-SSD architecture, to [recognize 90 common objects](https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts) it has already been taught to find from the [COCO dataset](http://cocodataset.org/#home).

If what you want to recognize is in that list of things it knows about (for example a cat, dog, etc), this may be useful to you as is in your own projects, or just to experiment with Machine Learning in the browser and get familiar with the possibilities of machine learning. 

If you are feeling particularly confident you can check out our [GitHub documentation](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) which goes into much more detail for customising various parameters to tailor performance to your needs.

## What's in all the files?

### ← index.html

We simply have some script tags in our HTML to grab the latest version of TensorFlow.js and the machine learning model class that can take image data as input and output predictions for what it sees in that image data.

In this case we simply reference the following to bring in TensorFlow.js:

```HTML
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js" type="text/javascript"></script>
```

However, if you want to pull in a particular version of TensorFlow.js you can do so like this:

```HTML
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.4.0/dist/tf.min.js" type="text/javascript"></script>
```

Finally you will see that we pull in the machine learning model class we later use in script.js like this:

```HTML
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd"></script>
```

### ← style.css

Nothing to see here. Just styles to make the demo look prettier. You can use or ignore these as you please.

### ← script.js

This file shows the demo code you need to write in JavaScript to interact with the COCO-SSD class we imported in the HTML. This is where the magic happens. We can pass data to the class and then retrive predictions on what it thinks it saw in the image which we can then use to make a decision. The file is well commented so do read the comments to learn more. Demos are provided for images in the DOM and also live webcam stream classification.

---
