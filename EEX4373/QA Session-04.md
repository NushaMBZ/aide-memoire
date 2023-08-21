---
mode: fleeting
---
**Source : [[2023070618431169.pdf|S-04]]**

What is data fitting, and why is it important in understanding the relationship between variables?

- Data fitting is the process of finding a mathematical model or function that closely matches the observed data points.

How does the best fit line help identify patterns in the data and distinguish them from random data points?

- The best fit line represents the general trend or pattern in the data. 

What is the role of noise in data fitting, and why is it important to avoid unnecessary patterns caused by noise?

- Noise refers to random variations or errors in the data that do not represent the underlying relationship between variables. It can distort the analysis and lead to incorrect conclusions.

What is the primary characteristic of a machine learning model that fits very well to the training dataset but does not perform well with the test data?

- The primary characteristic is overfitting. An overfitting model excessively learns from the details and noise in the training dataset, resulting in poor performance when presented with new, unseen data during testing.

What are the consequences of repeated training of a dataset on a machine learning model?

- Repeated training on the same dataset can exacerbate overfitting. The model becomes more and more specialized in fitting the training data, potentially losing its ability to generalize well to new data. It may memorize the training examples, making it less adaptable to variations or noise in the data.

Why does overfitting occur in machine learning models?

- Overfitting occurs when a machine learning model becomes too complex or flexible, attempting to fit every data point perfectly. 

In terms of the learning process, what does it mean when a machine learning model tries to fit each data point on the curve?

- When a machine learning model tries to fit each data point on the curve, it means that the model is attempting to minimize the error between the predicted output and the actual output for every single training example.

What is the consequence of the model not being allowed to look at the data a sufficient number of times during training?

- Insufficient exposure to the data during training can lead to underfitting. The model may not learn the underlying patterns and relationships present in the data, resulting in poor performance on both the test dataset and new, unseen data.

What is bias in the context of machine learning models?

- Bias in machine learning refers to the difference between the average prediction made by the model and the target value. It indicates the systematic error or deviation of the model's predictions from the true values.

How does limited flexibility of an algorithm contribute to the occurrence of bias?

- When an algorithm has limited flexibility, it means that the model is not capable of capturing complex relationships or patterns in the data. This limited flexibility can lead to bias as the model may oversimplify the underlying relationships, resulting in a deviation between its predictions and the true target values.

What are the consequences of high bias on the performance of a machine learning model?

- High bias causes underfitting of the model, leading to poor performance on both the training and test data. The model fails to capture the underlying patterns and relationships in the data, resulting in low accuracy, limited predictive power, and an inability to generalize well to unseen data.

What does variance represent in the context of machine learning models?

- Variance in machine learning refers to the spread of data points and measures how much individual data points differ from their mean value and from other points in the dataset.

How does variance impact the generalization ability of a machine learning model?

- A model with high variance tends to overfit the training data and does not generalize well to new, unseen data. 

What is the relationship between variance and the difference between validation error and prediction error?

- High variance in a model is indicated by a significant difference between the validation error and the prediction error.

How can a machine learning model address the issue of high variance and overfitting?

- To address high variance and overfitting, a machine learning model can be regularized. Regularization techniques such as L1 or L2 regularization can be applied to introduce a penalty for complexity, limiting the model's sensitivity to specific training data.

![[Pasted image 20230706211259.png]]

Explain how ignoring less important features can improve a model's performance on unseen data.

- Ignoring less important features in a model can enhance its ability to generalize well to unseen data. By excluding irrelevant or redundant features, the model can focus on the most informative ones, thereby reducing noise and improving the signal-to-noise ratio. 

Explain how adding a penalty to the model with high variance helps avoid overfitting.

- This penalty is commonly implemented using regularization techniques like L1 or L2 regularization. By applying the penalty, the model is discouraged from relying too heavily on any particular feature or coefficient. It forces the model to find a balance between fitting the training data well and maintaining simplicity. As a result, the beta coefficients associated with less influential features are shrunk towards zero, preventing the model from overemphasizing noise or outliers in the training data. 

What is ridge regularization (L1) and how does it help improve machine learning models? Provide a brief explanation of the key concept and discuss the role of the regularization parameter in controlling the bias-variance trade-off.

- RR involves adding a penalty term to the model's loss function, which is proportional to the squared magnitude of the model's coefficients. By introducing this penalty, ridge regularization encourages the model to reduce the magnitude of its coefficients, effectively shrinking them towards zero.

- The key concept behind ridge regularization is to control the complexity of the model and address the issue of overfitting.
  
- By shrinking the coefficients, ridge regularization helps prevent the model from overly relying on specific features or exhibiting high variance.
  
- The regularization parameter, often denoted as λ (lambda), plays a critical role in ridge regularization. It determines the amount of penalty applied to the coefficients. When λ is set to zero, no regularization is applied, and the model reverts to ordinary least squares regression. In this case, the model may have low bias but potentially high variance.
  
- As the value of λ increases, the penalty term becomes more influential, and the model's coefficients are shrunk towards zero. This helps reduce the model's variance, making it more stable and less prone to overfitting. However, increasing λ also introduces a small amount of bias, as it restricts the model's flexibility to fit the training data perfectly.
  
- Therefore, the regularization parameter λ allows for a trade-off between bias and variance. A higher value of λ reduces variance but increases bias, whereas a lower value of λ reduces bias but increases variance. By tuning the regularization parameter, practitioners can find an optimal balance that leads to better generalization performance.

Explain the key concept behind lasso regularization and discuss its role in feature selection.

- In lasso regularization, a penalty term is added to the model's loss function, which is proportional to the absolute magnitude of the coefficients. 
- The key concept behind lasso regularization is the ability to automatically select relevant features and discard irrelevant or redundant ones. By shrinking the coefficients towards zero, lasso regularization encourages sparse solutions where only a subset of features has non-zero coefficients.

