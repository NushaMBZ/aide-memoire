---
dg-publish: true
---
# Classification Algorithms
Set of machine learning techniques designed to categorize or classify data points into predefined classes or categories.

>[!info]
>The primary goal of these algorithms is to learn patterns and relationships in labeled training data so that they can accurately assign new, unseen data points to the appropriate class labels.

In a classification problem, you have a dataset where each data point consists of features (attributes) and a corresponding class label. The objective is to build a model that can learn the underlying patterns in the features and then predict the correct class label for new, unseen data.

## Types of Classification Algorithms

1. **Binary Classification:** This is the simplest type, involving the categorization of data into two distinct classes. 
    
2. **Multiclass Classification:** In this type, data is classified into more than two classes, where each data point belongs to a single class. 
    
3. **Multilabel Classification:** Here, each data point can belong to multiple classes simultaneously.
    
4. **Imbalanced Classification:** In this scenario, one class has significantly fewer instances compared to the others. 
    
5. **Ordinal Classification:** In ordinal classification, classes have a natural order or hierarchy. The goal is to predict the correct order of classes.
    
6. **Hierarchical Classification:** Hierarchical classification involves organizing classes into a structured hierarchy. Each class can have sub-classes, forming a tree-like structure. 
    
7. **One-Class Classification (Anomaly Detection):** This involves classifying data points into one main class while treating all other data as anomalies or outliers. 
    
8. **Time Series Classification:** In this type, data points are ordered based on time, and the goal is to predict the class of a future data point based on historical patterns. 
    
9. **Text Classification:** This is a subset of classification where the data is textual in nature, such as classifying emails as spam or not spam, sentiment analysis of text reviews, or categorizing news articles.

## k-Nearest Neighbors (KNN) Algorithm

k-Nearest Neighbors (k-NN) for classification is a machine learning algorithm used to <mark style="background: #FFF3A3A6;">categorize data points into different classes based on their similarity to other data points.</mark>

**Steps involved in classifying structured dataset with k-NN**

1. **Training:**
    - During the training phase, KNN <mark style="background: #FFF3A3A6;">stores the feature vectors and corresponding class labels</mark> of the training dataset.
2. **Prediction:**
    - Given a new data point to classify, KNN calculates the <mark style="background: #FFF3A3A6;">distance between the new point and all points in the training set.</mark> Common distance metrics include Euclidean distance, Manhattan distance, or cosine similarity.
    - The 'k' nearest neighbors to the new data point are selected based on the calculated distances.
3. **Voting:**
    - For classification tasks, KNN <mark style="background: #FFF3A3A6;">counts the occurrences of each class label among the 'k' neighbors.</mark>
    - The <mark style="background: #FFF3A3A6;">class label with the highest count (mode) among the neighbors is assigned to the new data point.</mark>

**Parameters:**
- The most important parameter in KNN is 'k', the number of neighbors to consider. A *smaller 'k' can lead to a noisy decision boundary*, while a *larger 'k' can smooth out the decision boundary*. The choice of **'k' depends on the dataset and can be determined through techniques like cross-validation.**
- The **distance metric used to calculate distances between data points can greatly affect the results.**

**Strengths and Weaknesses:**

- **Strengths:** KNN is simple to understand and implement, and it can <mark style="background: #FFF3A3A6;">capture complex decision boundaries.</mark> It doesn't make strong assumptions about the data distribution and can handle multi-class problems naturally.
- **Weaknesses:** KNN can be sensitive to noisy data and irrelevant features. Its prediction can be <mark style="background: #FFF3A3A6;">slow for large datasets</mark> since it needs to calculate distances for all data points. It's also<mark style="background: #FFF3A3A6;"> not suitable for high-dimensional data</mark> due to the curse of dimensionality.

**Use Cases:**

- KNN is suitable for cases where the decision boundary is irregular and where there are clear clusters of data points belonging to different classes.
- It's often used as a baseline algorithm for comparison with more complex models.
- It's useful for cases where you want to understand the influence of individual data points on predictions (e.g., identifying outliers).

### Calculating the Distance Metrics

The choice of distance metric is a critical aspect of the k-Nearest Neighbors (KNN) algorithm. Different distance metrics capture different aspects of similarity or dissimilarity between data points. Here are some commonly used distance metrics in KNN:

- **Euclidean Distance:**
  
  The Euclidean distance measures the straight-line distance between two points and is  the length of the shortest path connecting the two points. 
  
	The Euclidean distance between two data points $(\mathbf{X}=(x_1, x_2, \ldots, x_n)) \text{ and }(\mathbf{Y}=(y_1, y_2, \ldots, y_n))$ is calculated as:
$$
\text{Euclidean Distance} = \sqrt{\sum_{i=1}^n (x_i - y_i)^2}

$$
>[!warning]
>It is sensitive to the magnitude of the features. As the number of dimensions increases,  the distance between points tends to become larger, which is known as the curse of  dimensionality.

- **Manhattan Distance (City Block Distance):**
  
  Manhattan distance, also known as city block distance or L1 norm, is a distance metric  used to calculate the distance between two points in a space with multiple dimensions.   
  
	The Manhattan distance between the same two points is given by:
$$

\text{Manhattan Distance} = \sum_{i=1}^n |x_i - y_i|
$$
- **Cosine Similarity:**
	Cosine similarity between two vectors $(\mathbf{X}) \text{ and } (\mathbf{Y})$ is calculated as:
$$
\text{Cosine Similarity} = \frac{\mathbf{X} \cdot \mathbf{Y}}{\|\mathbf{X}\| \cdot \|\mathbf{Y}\|}
$$
- **Minkowski Distance:**
  
  Minkowski distance is a mathematical measure used to quantify the distance between  two points in a multi-dimensional space. It is a generalization of other distance metrics,  such as Euclidean distance (when the Minkowski distance order is 2) and Manhattan  distance (when the Minkowski distance order is 1).
  
	The Minkowski distance with parameter $(p)$ between vectors $(\mathbf{X})$ and $(\mathbf{Y})$ is given by: 
	
$$
\text{Minkowski Distance} = \left( \sum_{i=1}^n |x_i - y_i|^p \right)^{1/p} 
$$
- Hamming Distance:
	Hamming distance for binary strings of equal length $(n)$ is:
$$
\text{Hamming Distance} = \text{Number of unequal positions}
$$
- Jaccard Similarity:
	Jaccard similarity between two sets is calculated as: 
	
$$\text{Jaccard Similarity} = \frac{\text{Size of Intersection}}{\text{Size of Union}} $$
### Calculating the number of Clusters (K)  

The value of K in K-Nearest Neighbours (KNN) is a hyperparameter that determines  the number of nearest neighbors to consider when making predictions for a new data  point.

Selecting an appropriate value for K is crucial because there is no particular way  of choosing a value for K. Yet, it can significantly impact the performance and accuracy  of the KNN algorithm. 

Below are some important points that you can consider in  deciding the value of K.  

- Understand the Problem and Data:  
	- Before choosing a value for K, it is essential to understand the nature of the problem  that you are trying to solve and the characteristics of the dataset. 
- Cross -Validation:  
	- Split the dataset into two parts: a training set and a validation set. The training set is  used to train the KNN model, while the validation set is used to evaluate its  performance. Apply KNN with different values of K (usually a range of odd integers  is used) and calculate the accuracy or other relevant performance metrics on the  validation set for each K.  
- Selecting Performance Metric:  
	- Choose an appropriate performance metric based on the problem solving. Common  metrics include accuracy, precision, recall, F1-score, or area under the receiver  operating characteristic curve (AUC-ROC).  
- Plotting the Performance Curve:  
	- Plot the performance metric (e.g., accuracy) against the different K values used during  cross-validation. Observe how the performance changes as K varies.