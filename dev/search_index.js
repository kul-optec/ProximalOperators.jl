var documenterSearchIndex = {"docs":
[{"location":"functions/#Functions","page":"Functions","title":"Functions","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Here we list the available functions, grouped by category. Each function is documented with its exact definition and the necessary parameters for construction. The proximal mapping (and gradient, when defined) of such functions is computed by calling the prox and prox! methods (and gradient, gradient!, when defined). These functions can be modified and/or combined together to make new ones, by means of calculus rules.","category":"page"},{"location":"functions/#Indicators-of-sets","page":"Functions","title":"Indicators of sets","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"When function f is the indicator function of a set S, that is","category":"page"},{"location":"functions/","page":"Functions","title":"Functions","text":"f(x) = δ_S(x) =\nbegincases\n0  textif x in S \n+  textotherwise\nendcases","category":"page"},{"location":"functions/","page":"Functions","title":"Functions","text":"then mathrmprox_γf = Π_S is the projection onto S. Therefore ProximalOperators includes in particular projections onto commonly used sets, which are here listed.","category":"page"},{"location":"functions/","page":"Functions","title":"Functions","text":"IndAffine\nIndBallLinf   \nIndBallL0     \nIndBallL1     \nIndBallL2     \nIndBallRank   \nIndBinary\nIndBox  \nIndGraph     \nIndHalfspace  \nIndHyperslab\nIndPoint\nIndPolyhedral              \nIndSimplex    \nIndSphereL2\nIndStiefel","category":"page"},{"location":"functions/#ProximalOperators.IndAffine","page":"Functions","title":"ProximalOperators.IndAffine","text":"IndAffine(A, b; iterative=false)\n\nIf A is a matrix (dense or sparse) and b is a vector, return the indicator function of the affine set\n\nS = x  Ax = b\n\nIf A is a vector and b is a scalar, return the indicator function of the set\n\nS = x  langle A x rangle = b\n\nBy default, a direct method (QR factorization of matrix A') is used to evaluate prox!. If iterative=true, then prox! is evaluated approximately using an iterative method instead.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndBallLinf","page":"Functions","title":"ProximalOperators.IndBallLinf","text":"Indicator of a L_ norm ball\n\nIndBallLinf(r=1.0)\n\nReturn the indicator function of the set\n\nS =  x  max (x_i) leq r \n\nParameter r must be positive.\n\n\n\n\n\n","category":"function"},{"location":"functions/#ProximalOperators.IndBallL0","page":"Functions","title":"ProximalOperators.IndBallL0","text":"IndBallL0(r=1)\n\nReturn the indicator function of the L_0 pseudo-norm ball\n\nS =  x  mathrmnnz(x) leq r \n\nParameter r must be a positive integer.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndBallL1","page":"Functions","title":"ProximalOperators.IndBallL1","text":"IndBallL1(r=1.0)\n\nReturn the indicator function of the L_1 norm ball\n\nS = left x  sum_i x_i leq r right\n\nParameter r must be positive.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndBallL2","page":"Functions","title":"ProximalOperators.IndBallL2","text":"IndBallL2(r=1.0)\n\nReturn the indicator function of the Euclidean ball\n\nS =  x  x leq r \n\nwhere cdot is the L_2 (Euclidean) norm. Parameter r must be positive.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndBallRank","page":"Functions","title":"ProximalOperators.IndBallRank","text":"IndBallRank(r=1)\n\nReturn the indicator function of the set of matrices of rank at most r:\n\nS =  X  mathrmrank(X) leq r \n\nParameter r must be a positive integer.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndBinary","page":"Functions","title":"ProximalOperators.IndBinary","text":"IndBinary(low, up)\n\nReturn the indicator function of the set\n\nS =  x  x_i = low_i textor x_i = up_i \n\nParameters low and up can be either scalars or arrays of the same dimension as the space.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndBox","page":"Functions","title":"ProximalOperators.IndBox","text":"IndBox(low, up)\n\nReturn the indicator function of the box\n\nS =  x  low leq x leq up \n\nParameters low and up can be either scalars or arrays of the same dimension as the space: they must satisfy low <= up, and are allowed to take values -Inf and +Inf to indicate unbounded coordinates.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndGraph","page":"Functions","title":"ProximalOperators.IndGraph","text":"IndGraph(A)\n\nFor matrix A (dense or sparse) return the indicator function of its graph:\n\nG_A = (x y)  Ax = y\n\nThe evaluation of prox! uses direct methods based on LDLt (LL for dense cases) matrix factorization and backsolve.\n\nThe prox! method operates on pairs (x, y) as input/output. So if f = IndGraph(A) is the indicator of the graph G_A, while (x, y) and (c, d) are pairs of vectors of the same sizes, then\n\nprox!((c, d), f, (x, y))\n\nwrites to (c, d) the projection onto G_A of (x, y).\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndHalfspace","page":"Functions","title":"ProximalOperators.IndHalfspace","text":"IndHalfspace(a, b)\n\nFor an array a and a scalar b, return the indicator of half-space\n\nS = x  langle ax rangle leq b \n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndHyperslab","page":"Functions","title":"ProximalOperators.IndHyperslab","text":"IndHyperslab(low, a, upp)\n\nFor an array a and scalars low and upp, return the so-called hyperslab\n\nS = x  low leq langle ax rangle leq upp \n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndPoint","page":"Functions","title":"ProximalOperators.IndPoint","text":"IndPoint(p=0)\n\nReturn the indicator of the singleton set\n\nC = p \n\nParameter p can be a scalar, in which case the unique element of S has uniform coefficients.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndPolyhedral","page":"Functions","title":"ProximalOperators.IndPolyhedral","text":"IndPolyhedral([l,] A, [u, xmin, xmax])\n\nReturn the indicator function of the polyhedral set:\n\nS =  x  x_min leq x leq x_max l leq Ax leq u \n\nMatrix A is a mandatory argument; when any of the bounds is not provided, it is assumed to be (plus or minus) infinity.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndSimplex","page":"Functions","title":"ProximalOperators.IndSimplex","text":"IndSimplex(a=1.0)\n\nReturn the indicator of the simplex\n\nS = left x  x geq 0 sum_i x_i = a right\n\nBy default a=1, therefore S is the probability simplex.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndSphereL2","page":"Functions","title":"ProximalOperators.IndSphereL2","text":"IndSphereL2(r=1)\n\nReturn the indicator function of the Euclidean sphere\n\nS =  x  x = r \n\nwhere cdot is the L_2 (Euclidean) norm. Parameter r must be positive.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndStiefel","page":"Functions","title":"ProximalOperators.IndStiefel","text":"IndStiefel()\n\nReturn the indicator of the Stiefel manifold\n\nS_np = left X in mathbbF^n times p  X^*X = I right\n\nwhere mathbbF is the real or complex field, and parameters n and p are inferred from the matrix provided as input.\n\n\n\n\n\n","category":"type"},{"location":"functions/#Indicators-of-convex-cones","page":"Functions","title":"Indicators of convex cones","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"An important class of sets in optimization is that of convex cones. These are used in particular for formulating cone programming problems, a family of problems which includes linear programs (LP), quadratic programs (QP), quadratically constrained quadratic programs (QCQP) and semidefinite programs (SDP).","category":"page"},{"location":"functions/","page":"Functions","title":"Functions","text":"IndExpPrimal\nIndExpDual\nIndFree\nIndNonnegative\nIndNonpositive\nIndPSD\nIndSOC\nIndRotatedSOC\nIndZero","category":"page"},{"location":"functions/#ProximalOperators.IndExpPrimal","page":"Functions","title":"ProximalOperators.IndExpPrimal","text":"IndExpPrimal()\n\nReturn the indicator function of the primal exponential cone, that is\n\nC = mathrmcl  (rst)  s  0 se^rs leq t  subset mathbbR^3\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndExpDual","page":"Functions","title":"ProximalOperators.IndExpDual","text":"IndExpDual()\n\nReturn the indicator function of the dual exponential cone, that is\n\nC = mathrmcl  (uvw)  u  0 -ue^vu leq we  subset mathbbR^3\n\n\n\n\n\n","category":"function"},{"location":"functions/#ProximalOperators.IndFree","page":"Functions","title":"ProximalOperators.IndFree","text":"IndFree()\n\nReturn the indicator function of the whole space, or \"free cone\", i.e., a function which is identically zero.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndNonnegative","page":"Functions","title":"ProximalOperators.IndNonnegative","text":"IndNonnegative()\n\nReturn the indicator of the nonnegative orthant\n\nC =  x  x geq 0 \n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndNonpositive","page":"Functions","title":"ProximalOperators.IndNonpositive","text":"IndNonpositive()\n\nReturn the indicator of the nonpositive orthant\n\nC =  x  x leq 0 \n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndPSD","page":"Functions","title":"ProximalOperators.IndPSD","text":"IndPSD(;scaling=false)\n\nReturn the indicator of the positive semi-definite cone\n\nC =  X  X succeq 0 \n\nThe argument to the function can be either a Symmetric, Hermitian, or AbstractMatrix object, or an object of type AbstractVector{Float64} holding a symmetric matrix in (lower triangular) packed storage.\n\nIf scaling = true then the vectors y and x in prox!(y::AbstractVector{Float64}, f::IndPSD, x::AbstractVector{Float64}, args...) have the off-diagonal elements multiplied with √2 to preserve inner products, see Vandenberghe 2010: http://www.seas.ucla.edu/~vandenbe/publications/coneprog.pdf .\n\nI.e. when when scaling=true, let X,Y be matrices and\n\nx = (X_{1,1}, √2⋅X_{2,1}, ... ,√2⋅X_{n,1}, X_{2,2}, √2⋅X_{3,2}, ..., X_{n,n}),\n\ny = (Y_{1,1}, √2⋅Y_{2,1}, ... ,√2⋅Y_{n,1}, Y_{2,2}, √2⋅Y_{3,2}, ..., Y_{n,n})\n\nthen prox!(Y, f, X) is equivalent to prox!(y, f, x).\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndSOC","page":"Functions","title":"ProximalOperators.IndSOC","text":"IndSOC()\n\nReturn the indicator of the second-order cone (also known as ice-cream cone or Lorentz cone), that is\n\nC = left (t x)  x leq t right\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndRotatedSOC","page":"Functions","title":"ProximalOperators.IndRotatedSOC","text":"Indicator of the rotated second-order cone\n\n    IndRotatedSOC()\n\nReturn the indicator of the rotated second-order cone (also known as ice-cream cone or Lorentz cone), that is\n\nC = left (p q x)  x^2 leq 2cdot pq p geq 0 q geq 0 right\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.IndZero","page":"Functions","title":"ProximalOperators.IndZero","text":"IndZero()\n\nReturn the indicator function of the set containing the origin, the \"zero cone\".\n\n\n\n\n\n","category":"type"},{"location":"functions/#Norms-and-regularization-functions","page":"Functions","title":"Norms and regularization functions","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"CubeNormL2\nElasticNet\nNormL0\nNormL1\nNormL2\nNormL21\nNormL1plusL2\nNormLinf\nNuclearNorm\nSqrNormL2\nTotalVariation1D","category":"page"},{"location":"functions/#ProximalOperators.CubeNormL2","page":"Functions","title":"ProximalOperators.CubeNormL2","text":"CubeNormL2(λ=1)\n\nWith a nonnegative scalar λ, return the function\n\nf(x) = λx^3\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.ElasticNet","page":"Functions","title":"ProximalOperators.ElasticNet","text":"ElasticNet(μ=1, λ=1)\n\nReturn the function\n\nf(x) = μx_1 + (λ2)x^2\n\nfor nonnegative parameters μ and λ.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.NormL0","page":"Functions","title":"ProximalOperators.NormL0","text":"NormL0(λ=1)\n\nReturn the L_0 pseudo-norm function\n\nf(x) = λcdotmathrmnnz(x)\n\nfor a nonnegative parameter λ.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.NormL1","page":"Functions","title":"ProximalOperators.NormL1","text":"NormL1(λ=1)\n\nWith a nonnegative scalar parameter λ, return the L_1 norm\n\nf(x) = λcdot_ix_i\n\nWith a nonnegative array parameter λ, return the weighted L_1 norm\n\nf(x) = _i λ_ix_i\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.NormL2","page":"Functions","title":"ProximalOperators.NormL2","text":"NormL2(λ=1)\n\nWith a nonnegative scalar parameter λ, return the L_2 norm\n\nf(x) = λcdotsqrtx_1^2 +  + x_n^2\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.NormL21","page":"Functions","title":"ProximalOperators.NormL21","text":"NormL21(λ=1, dim=1)\n\nReturn the \"sum of L_2 norm\" function\n\nf(X) = λ_ix_i\n\nfor a nonnegative λ, where x_i is the i-th column of X if dim == 1, and the i-th row of X if dim == 2. In words, it is the sum of the Euclidean norms of the columns or rows.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.NormL1plusL2","page":"Functions","title":"ProximalOperators.NormL1plusL2","text":"NormL1plusL2(λ_1=1, λ_2=1)\n\nWith two nonegative scalars λ1 and λ2, return the function\n\nf(x) = λ_1 _i=1^n x_i + λ_2 sqrtx_1^2 +  + x_n^2\n\nWith nonnegative array λ1 and nonnegative scalar λ2, return the function\n\nf(x) =  _i=1^n λ_1_i x_i + λ_2 sqrtx_1^2 +  + x_n^2\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.NormLinf","page":"Functions","title":"ProximalOperators.NormLinf","text":"NormLinf(λ=1)\n\nReturn the L_ norm\n\nf(x) = λmaxx_1  x_n\n\nfor a nonnegative parameter λ.\n\n\n\n\n\n","category":"function"},{"location":"functions/#ProximalOperators.NuclearNorm","page":"Functions","title":"ProximalOperators.NuclearNorm","text":"NuclearNorm(λ=1)\n\nReturn the nuclear norm\n\nf(X) = X_* = λ _i σ_i(X)\n\nwhere λ is a positive parameter and σ_i(X) is i-th singular value of matrix X.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.SqrNormL2","page":"Functions","title":"ProximalOperators.SqrNormL2","text":"SqrNormL2(λ=1)\n\nWith a nonnegative scalar λ, return the squared Euclidean norm\n\nf(x) = tfracλ2x^2\n\nWith a nonnegative array λ, return the weighted squared Euclidean norm\n\nf(x) = tfrac12_i λ_i x_i^2\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.TotalVariation1D","page":"Functions","title":"ProximalOperators.TotalVariation1D","text":"TotalVariation1D(λ=1)\n\nWith a nonnegative scalar parameter λ, return the 1D total variation\n\nf(x) = λ _i=2^n x_i - x_i-1\n\n\n\n\n\n","category":"type"},{"location":"functions/#Penalties-and-other-functions","page":"Functions","title":"Penalties and other functions","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"CrossEntropy\nHingeLoss\nHuberLoss\nLeastSquares\nLinear\nLogBarrier\nLogisticLoss\nMaximum\nQuadratic\nSqrHingeLoss\nSumPositive","category":"page"},{"location":"functions/#ProximalOperators.CrossEntropy","page":"Functions","title":"ProximalOperators.CrossEntropy","text":"CrossEntropy(b)\n\nReturn the function\n\nf(x) = -frac1N sum_i = 1^N b_i log (x_i)+(1-b_i) log (1-x_i)\n\nwhere b is an array of length N such that 0 ≤ b ≤ 1 component-wise.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.HingeLoss","page":"Functions","title":"ProximalOperators.HingeLoss","text":"HingeLoss(y, μ=1)\n\nReturn the function\n\nf(x) = μ_i max0 1 - y_i  x_i\n\nwhere y is an array and μ is a positive parameter.\n\n\n\n\n\n","category":"function"},{"location":"functions/#ProximalOperators.HuberLoss","page":"Functions","title":"ProximalOperators.HuberLoss","text":"HuberLoss(ρ=1, μ=1)\n\nReturn the function\n\nf(x) = begincases\n    tfracμ2x^2  textif x  ρ \n    ρμ(x - tfracρ2)  textotherwise\nendcases\n\nwhere ρ and μ are positive parameters.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.LeastSquares","page":"Functions","title":"ProximalOperators.LeastSquares","text":"LeastSquares(A, b, λ=1.0; iterative=false)\n\nFor a matrix A, a vector b and a scalar λ, return the function\n\nf(x) = tfraclambda2Ax - b^2\n\nBy default, a direct method (based on Cholesky factorization) is used to evaluate prox!. If iterative=true, then prox! is evaluated approximately using an iterative method instead.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.Linear","page":"Functions","title":"ProximalOperators.Linear","text":"Linear(c)\n\nReturn the linear function\n\nf(x) = langle c x rangle\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.LogBarrier","page":"Functions","title":"ProximalOperators.LogBarrier","text":"LogBarrier(a=1, b=0, μ=1)\n\nReturn the function\n\nf(x) = -μ_ilog(ax_i+b)\n\nfor a nonnegative parameter μ.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.LogisticLoss","page":"Functions","title":"ProximalOperators.LogisticLoss","text":"LogisticLoss(y, μ=1)\n\nReturn the function\n\nf(x) = μ_i log(1+exp(-y_ix_i))\n\nwhere y is an array and μ is a positive parameter.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.Maximum","page":"Functions","title":"ProximalOperators.Maximum","text":"Maximum(λ=1)\n\nFor a nonnegative parameter λ ⩾ 0, return the function\n\nf(x) = lambda cdot max x_i  i = 1ldots n \n\n\n\n\n\n","category":"function"},{"location":"functions/#ProximalOperators.Quadratic","page":"Functions","title":"ProximalOperators.Quadratic","text":"Quadratic(Q, q; iterative=false)\n\nFor a matrix Q (dense or sparse, symmetric and positive semidefinite) and a vector q, return the quadratic function\n\nf(x) = tfrac12langle Qx xrangle + langle q x rangle\n\nBy default, a direct method (based on Cholesky factorization) is used to evaluate prox!. If iterative=true, then prox! is evaluated approximately using an iterative method instead.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.SqrHingeLoss","page":"Functions","title":"ProximalOperators.SqrHingeLoss","text":"SqrHingeLoss(y, μ=1)\n\nReturn the squared Hinge loss\n\nf(x) = μ_i max0 1 - y_i  x_i^2\n\nwhere y is an array and μ is a positive parameter.\n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.SumPositive","page":"Functions","title":"ProximalOperators.SumPositive","text":"SumPositive()\n\nReturn the function\n\nf(x) = _i max0 x_i\n\n\n\n\n\n","category":"type"},{"location":"functions/#Distances-from-convex-sets","page":"Functions","title":"Distances from convex sets","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"When the indicator of a convex set is constructed (see Indicators of sets) the (squared) distance from the set can be constructed using the following:","category":"page"},{"location":"functions/","page":"Functions","title":"Functions","text":"DistL2\nSqrDistL2","category":"page"},{"location":"functions/#ProximalOperators.DistL2","page":"Functions","title":"ProximalOperators.DistL2","text":"DistL2(ind_S)\n\nGiven ind_S the indicator function of a set S, and an optional positive parameter λ, return the (weighted) Euclidean distance from S, that is function\n\ng(x) = λmathrmdist_S(x) = min  λy - x  y in S \n\n\n\n\n\n","category":"type"},{"location":"functions/#ProximalOperators.SqrDistL2","page":"Functions","title":"ProximalOperators.SqrDistL2","text":"SqrDistL2(ind_S, λ=1)\n\nGiven ind_S the indicator function of a set S, and an optional positive parameter λ, return the (weighted) squared Euclidean distance from S, that is function\n\ng(x) = tfracλ2mathrmdist_S^2(x) = min left tfracλ2y - x^2  y in S right\n\n\n\n\n\n","category":"function"},{"location":"operators/#Prox-and-gradient","page":"Prox and gradient","title":"Prox and gradient","text":"","category":"section"},{"location":"operators/","page":"Prox and gradient","title":"Prox and gradient","text":"ProximalOperators relies on the first-order primitives defined in ProximalCore. The following methods allow to evaluate the proximal mapping (and gradient, when defined) of mathematical functions, which are constructed according to what described in Functions and Calculus rules.","category":"page"},{"location":"operators/","page":"Prox and gradient","title":"Prox and gradient","text":"ProximalCore.prox\nProximalCore.prox!\nProximalCore.gradient\nProximalCore.gradient!","category":"page"},{"location":"operators/#ProximalCore.prox","page":"Prox and gradient","title":"ProximalCore.prox","text":"prox(f, x, gamma=1)\n\nProximal mapping for f, evaluated at x, with stepsize gamma.\n\nThe proximal mapping is defined as\n\nmathrmprox_gamma f(x) = argmin_z left f(z) + tfrac12gammaz-x^2 right\n\nReturns a tuple (y, fy) consisting of\n\ny: the output of the proximal mapping of f at x with stepsize gamma\nfy: the value of f at y\n\nSee also: prox!.\n\n\n\n\n\n","category":"function"},{"location":"operators/#ProximalCore.prox!","page":"Prox and gradient","title":"ProximalCore.prox!","text":"prox!(y, f, x, gamma=1)\n\nIn-place proximal mapping for f, evaluated at x, with stepsize gamma.\n\nThe proximal mapping is defined as\n\nmathrmprox_gamma f(x) = argmin_z left f(z) + tfrac12gammaz-x^2 right\n\nThe result is written to the (pre-allocated) array y, which should have the same shape/size as x.\n\nReturns the value of f at y.\n\nSee also: prox.\n\n\n\n\n\n","category":"function"},{"location":"operators/#ProximalCore.gradient","page":"Prox and gradient","title":"ProximalCore.gradient","text":"gradient(f, x)\n\nGradient (and value) of f at x.\n\nReturn a tuple (y, fx) consisting of\n\ny: the gradient of f at x\nfx: the value of f at x\n\nSee also: gradient!.\n\n\n\n\n\n","category":"function"},{"location":"operators/#ProximalCore.gradient!","page":"Prox and gradient","title":"ProximalCore.gradient!","text":"gradient!(y, f, x)\n\nIn-place gradient (and value) of f at x.\n\nThe gradient is written to the (pre-allocated) array y, which should have the same shape/size as x.\n\nReturns the value f at x.\n\nSee also: gradient.\n\n\n\n\n\n","category":"function"},{"location":"operators/#Complex-and-matrix-variables","page":"Prox and gradient","title":"Complex and matrix variables","text":"","category":"section"},{"location":"operators/","page":"Prox and gradient","title":"Prox and gradient","text":"The proximal mapping is usually discussed in the case of functions over mathbbR^n. However, by adapting the inner product langlecdotcdotrangle and associated norm cdot adopted in its definition, one can extend the concept to functions over more general spaces. When functions of unidimensional arrays (vectors) are concerned, the standard Euclidean product and norm are used in defining prox (therefore prox!, but also gradient and gradient!). This are the inner product and norm which are computed by dot and norm in Julia.","category":"page"},{"location":"operators/","page":"Prox and gradient","title":"Prox and gradient","text":"When bidimensional, tridimensional (matrices and tensors) and higher dimensional arrays are concerned, then the definitions of proximal mapping and gradient are naturally extended by considering the appropriate inner product. For k-dimensional arrays, of size n_1 times n_2 times ldots times n_k, we consider the inner product","category":"page"},{"location":"operators/","page":"Prox and gradient","title":"Prox and gradient","text":"langle A B rangle = sum_i_1ldotsi_k A_i_1ldotsi_k cdot B_i_1ldotsi_k","category":"page"},{"location":"operators/","page":"Prox and gradient","title":"Prox and gradient","text":"which reduces to the usual Euclidean product in case of unidimensional arrays, and to the trace product langle A B rangle = mathrmtr(A^top B) in the case of matrices (bidimensional arrays). This inner product, and the associated norm, are again the ones computed by dot and norm in Julia.","category":"page"},{"location":"operators/#Multiple-variable-blocks","page":"Prox and gradient","title":"Multiple variable blocks","text":"","category":"section"},{"location":"operators/","page":"Prox and gradient","title":"Prox and gradient","text":"By combining functions together through SeparableSum, the resulting function will have multiple inputs, i.e., it will be defined over the Cartesian product of the domains of the individual functions. To represent elements (points) of such product space, here we use Julia's Tuple objects.","category":"page"},{"location":"operators/","page":"Prox and gradient","title":"Prox and gradient","text":"Example. Suppose that the following function needs to be represented:","category":"page"},{"location":"operators/","page":"Prox and gradient","title":"Prox and gradient","text":"f(x Y) = x_1 + Y_*","category":"page"},{"location":"operators/","page":"Prox and gradient","title":"Prox and gradient","text":"that is, the sum of the L_1 norm of some vector x and the nuclear norm (the sum of the singular values) of some matrix Y. This is accomplished as follows:","category":"page"},{"location":"operators/","page":"Prox and gradient","title":"Prox and gradient","text":"using ProximalOperators\nf = SeparableSum(NormL1(), NuclearNorm());","category":"page"},{"location":"operators/","page":"Prox and gradient","title":"Prox and gradient","text":"Now, function f is defined over pairs of appropriate Array objects. Likewise, the prox method will take pairs of Arrays as inputs, and return pairs of Arrays as output:","category":"page"},{"location":"operators/","page":"Prox and gradient","title":"Prox and gradient","text":"x = randn(10); # some random vector\nY = randn(20, 30); # some random matrix\nf_xY = f((x, Y)); # evaluates f at (x, Y)\n(u, V), f_uV = prox(f, (x, Y), 1.3); # computes prox at (x, Y)","category":"page"},{"location":"operators/","page":"Prox and gradient","title":"Prox and gradient","text":"The same holds for the separable sum of more than two functions, in which case \"pairs\" are to be replaced with Tuples of the appropriate length.","category":"page"},{"location":"demos/#Demos","page":"Demos","title":"Demos","text":"","category":"section"},{"location":"demos/","page":"Demos","title":"Demos","text":"The demos folder contains examples on how to use the functions of ProximalOperators to implement optimization algorithms. Warning: Make sure that the version of ProximalOperators that you have installed is up-to-date with the demo script you are trying to run, as the package features may change over time and the master branch be ahead of what you have installed.","category":"page"},{"location":"calculus/#Calculus-rules","page":"Calculus rules","title":"Calculus rules","text":"","category":"section"},{"location":"calculus/","page":"Calculus rules","title":"Calculus rules","text":"The calculus rules described in the following allow to modify and combine functions, to obtain new ones with efficiently computable proximal mapping.","category":"page"},{"location":"calculus/#Duality","page":"Calculus rules","title":"Duality","text":"","category":"section"},{"location":"calculus/","page":"Calculus rules","title":"Calculus rules","text":"Conjugate","category":"page"},{"location":"calculus/#ProximalOperators.Conjugate","page":"Calculus rules","title":"ProximalOperators.Conjugate","text":"Conjugate(f)\n\nReturn the convex conjugate (also known as Fenchel conjugate, or Fenchel-Legendre transform) of function f, that is\n\nf^*(x) = sup_y  langle y x rangle - f(y) \n\n\n\n\n\n","category":"type"},{"location":"calculus/#Functions-combination","page":"Calculus rules","title":"Functions combination","text":"","category":"section"},{"location":"calculus/","page":"Calculus rules","title":"Calculus rules","text":"PointwiseMinimum\nSeparableSum\nSlicedSeparableSum\nSum","category":"page"},{"location":"calculus/#ProximalOperators.PointwiseMinimum","page":"Calculus rules","title":"ProximalOperators.PointwiseMinimum","text":"PointwiseMinimum(f_1, ..., f_k)\n\nGiven functions f_1 to f_k, return their pointwise minimum, that is function\n\ng(x) = minf_1(x)  f_k(x)\n\nNote that g is a nonconvex function in general.\n\n\n\n\n\n","category":"type"},{"location":"calculus/#ProximalOperators.SeparableSum","page":"Calculus rules","title":"ProximalOperators.SeparableSum","text":"SeparableSum(f_1, ..., f_k)\n\nGiven functions f_1 to f_k, return their separable sum, that is\n\ng(x_1  x_k) = sum_i=1^k f_i(x_i)\n\nThe object g constructed in this way can be evaluated at Tuples of length k. Likewise, the prox and prox! methods for g operate with (input and output) Tuples of length k.\n\nExample:\n\nf = SeparableSum(NormL1(), NuclearNorm()); # separable sum of two functions\nx = randn(10); # some random vector\nY = randn(20, 30); # some random matrix\nf_xY = f((x, Y)); # evaluates f at (x, Y)\n(u, V), f_uV = prox(f, (x, Y), 1.3); # computes prox at (x, Y)\n\n\n\n\n\n","category":"type"},{"location":"calculus/#ProximalOperators.SlicedSeparableSum","page":"Calculus rules","title":"ProximalOperators.SlicedSeparableSum","text":"SlicedSeparableSum((f_1, ..., f_k), (J_1, ..., J_k))\n\nReturn the function\n\ng(x) = sum_i=1^k f_i(x_J_i)\n\nSlicedSeparableSum(f, (J_1, ..., J_k))\n\nAnalogous to the previous one, but apply the same function f to all slices of the variable x:\n\ng(x) = sum_i=1^k f(x_J_i)\n\n\n\n\n\n","category":"type"},{"location":"calculus/#ProximalOperators.Sum","page":"Calculus rules","title":"ProximalOperators.Sum","text":"Sum(f_1, ..., f_k)\n\nGiven functions f_1 to f_k, return their sum\n\ng(x) = sum_i=1^k f_i(x)\n\n\n\n\n\n","category":"type"},{"location":"calculus/#Functions-regularization","page":"Calculus rules","title":"Functions regularization","text":"","category":"section"},{"location":"calculus/","page":"Calculus rules","title":"Calculus rules","text":"MoreauEnvelope\nRegularize","category":"page"},{"location":"calculus/#ProximalOperators.MoreauEnvelope","page":"Calculus rules","title":"ProximalOperators.MoreauEnvelope","text":"MoreauEnvelope(f, γ=1)\n\nReturn the Moreau envelope (also known as Moreau-Yosida regularization) of function f with parameter γ (positive), that is\n\nf^γ(x) = min_z left f(z) + tfrac12γz-x^2 right\n\nIf f is convex, then f^γ is a smooth, convex, lower approximation to f, having the same minima as the original function.\n\n\n\n\n\n","category":"type"},{"location":"calculus/#ProximalOperators.Regularize","page":"Calculus rules","title":"ProximalOperators.Regularize","text":"Regularize(f, ρ=1.0, a=0.0)\n\nGiven function f, and optional parameters ρ (positive) and a, return\n\ng(x) = f(x) + tfracρ2x-a²\n\nParameter a can be either an array or a scalar, in which case it is subtracted component-wise from x in the above expression.\n\n\n\n\n\n","category":"type"},{"location":"calculus/#Pre-and-post-transformations","page":"Calculus rules","title":"Pre- and post-transformations","text":"","category":"section"},{"location":"calculus/","page":"Calculus rules","title":"Calculus rules","text":"Postcompose\nPrecompose\nPrecomposeDiagonal\nTilt\nTranslate","category":"page"},{"location":"calculus/#ProximalOperators.Postcompose","page":"Calculus rules","title":"ProximalOperators.Postcompose","text":"Postcompose(f, a=1, b=0)\n\nReturn the function\n\ng(x) = acdot f(x) + b\n\n\n\n\n\n","category":"type"},{"location":"calculus/#ProximalOperators.Precompose","page":"Calculus rules","title":"ProximalOperators.Precompose","text":"Precompose(f, L, μ, b)\n\nReturn the function\n\ng(x) = f(Lx + b)\n\nwhere f is a convex function and L is a linear mapping: this must satisfy LL^* = μI for μ  0. Furthermore, either f is separable or parameter μ is a scalar, for the prox of g to be computable.\n\nParameter L defines L through the mul! method. Therefore L can be an AbstractMatrix for example, but not necessarily.\n\nIn this case, prox and prox! are computed according to Prop. 24.14 in Bauschke, Combettes \"Convex Analysis and Monotone Operator Theory in Hilbert Spaces\", 2nd edition, 2016. The same result is Prop. 23.32 in the 1st edition of the same book.\n\n\n\n\n\n","category":"type"},{"location":"calculus/#ProximalOperators.PrecomposeDiagonal","page":"Calculus rules","title":"ProximalOperators.PrecomposeDiagonal","text":"PrecomposeDiagonal(f, a, b)\n\nReturn the function\n\ng(x) = f(mathrmdiag(a)x + b)\n\nFunction f must be convex and separable, or a must be a scalar, for the prox of g to be computable. Parametes a and b can be arrays of multiple dimensions, according to the shape/size of the input x that will be provided to the function: the way the above expression for g should be thought of, is g(x) = f(a.*x + b).\n\n\n\n\n\n","category":"type"},{"location":"calculus/#ProximalOperators.Tilt","page":"Calculus rules","title":"ProximalOperators.Tilt","text":"Tilt(f, a, b=0.0)\n\nGiven function f, an array a and a constant b (optional), return function\n\ng(x) = f(x) + langle a x rangle + b\n\n\n\n\n\n","category":"type"},{"location":"calculus/#ProximalOperators.Translate","page":"Calculus rules","title":"ProximalOperators.Translate","text":"Translate(f, b)\n\nReturn the translated function\n\ng(x) = f(x + b)\n\n\n\n\n\n","category":"type"},{"location":"#ProximalOperators.jl","page":"Home","title":"ProximalOperators.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ProximalOperators is a Julia package that implements first-order primitives for a variety of functions, which are commonly used for implementing optimization algorithms in several application areas, e.g., statistical learning, image and signal processing, optimal control.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The package relies on the interfaces defined in ProximalCore.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Please refer to the GitHub repository to browse the source code, report issues and submit pull requests.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To install the package, hit ] from the Julia command line to enter the package manager, then","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add ProximalOperators","category":"page"},{"location":"","page":"Home","title":"Home","text":"To load the package simply type","category":"page"},{"location":"","page":"Home","title":"Home","text":"using ProximalOperators","category":"page"},{"location":"","page":"Home","title":"Home","text":"Remember to do Pkg.update() from time to time, to keep the package up to date.","category":"page"},{"location":"#Quick-introduction","page":"Home","title":"Quick introduction","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"For a function f and a stepsize gamma  0, the proximal operator (or proximal mapping) is given by","category":"page"},{"location":"","page":"Home","title":"Home","text":"mathrmprox_gamma f(x) = argmin_z left f(z) + tfrac12gammaz-x^2 right","category":"page"},{"location":"","page":"Home","title":"Home","text":"and can be efficiently computed for many functions f used in applications.","category":"page"},{"location":"","page":"Home","title":"Home","text":"ProximalOperators allows to pick function f from a library of commonly used functions, and to modify and combine them using calculus rules to obtain new ones. The proximal mapping of f is then provided through the prox and prox! methods, as described here.","category":"page"},{"location":"","page":"Home","title":"Home","text":"For example, one can create the L1-norm as follows.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using ProximalOperators\n\njulia> f = NormL1(3.5)\nNormL1{Float64}(3.5)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Functions created this way are, of course, callable.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x = [1.0, 2.0, 3.0, 4.0, 5.0]; # some point\n\njulia> f(x)\n52.5","category":"page"},{"location":"","page":"Home","title":"Home","text":"Method prox evaluates the proximal operator associated with a function, given a point and (optionally) a positive stepsize parameter, returning the proximal point y and the value of the function at y:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> y, fy = prox(f, x, 0.5) # last argument is 1.0 if absent\n([0.0, 0.25, 1.25, 2.25, 3.25], 24.5)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Method prox! evaluates the proximal operator in place, and only returns the function value at the proximal point (in this case y must be preallocated and have the same shape/size as x):","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> y = similar(x); # allocate y\n\njulia> fy = prox!(y, f, x, 0.5) # in-place equivalent to y, fy = prox(f, x, 0.5)\n24.5","category":"page"},{"location":"#Bibliographic-references","page":"Home","title":"Bibliographic references","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"N. Parikh and S. Boyd (2014), Proximal Algorithms, Foundations and Trends in Optimization, vol. 1, no. 3, pp. 127-239.\nS. Boyd, N. Parikh, E. Chu, B. Peleato and J. Eckstein (2011), Distributed Optimization and Statistical Learning via the Alternating Direction Method of Multipliers, Foundations and Trends in Machine Learning, vol. 3, no. 1, pp. 1-122.","category":"page"},{"location":"#Credits","page":"Home","title":"Credits","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ProximalOperators.jl is developed by Lorenzo Stella and Niccolò Antonello at KU Leuven, ESAT/Stadius, and Mattias Fält at Lunds Universitet, Department of Automatic Control.","category":"page"}]
}
