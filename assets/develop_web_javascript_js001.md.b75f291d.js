import{_ as s,o as a,c as l,V as n}from"./chunks/framework.a215caf7.js";const C=JSON.parse('{"title":"Js中的if判断条件","description":"","frontmatter":{},"headers":[],"relativePath":"develop/web/javascript/js001.md","filePath":"develop/web/javascript/js001.md","lastUpdated":1689440421000}'),o={name:"develop/web/javascript/js001.md"},p=n(`<h1 id="js中的if判断条件" tabindex="-1">Js中的if判断条件 <a class="header-anchor" href="#js中的if判断条件" aria-label="Permalink to &quot;Js中的if判断条件&quot;">​</a></h1><h2 id="_1-变量类型" tabindex="-1">1.变量类型 <a class="header-anchor" href="#_1-变量类型" aria-label="Permalink to &quot;1.变量类型&quot;">​</a></h2><p><strong>1. 已定义变量,但未赋值</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">flag1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">flag1</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;已定义未赋值&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;添加为假---&gt;已定义未赋值&quot;</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">运行结果：</p><p>添加为假---&gt;已定义未赋值</p></div><p><strong>2. 已定义变量,赋值为字符串</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">flag2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">flag3</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39; &#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">flag2</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;已定义赋值为空串&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;已定义赋值为空串&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">flag3</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;已定义赋值不为空串&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;已定义赋值不为空串&quot;</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">运行结果：</p><p>条件为假---&gt;已定义赋值为空串</p><p>条件为真---&gt;已定义赋值不为空串</p></div><p><strong>3. 已定义变量,赋值为boolean</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">flag4</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">flag5</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">flag4</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;已定义赋值为true&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;已定义赋值为true&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">flag4</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;已定义赋值为false&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;已定义赋值为false&quot;</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">运行结果：</p><p>条件为真---&gt;已定义赋值为true</p><p>条件为假---&gt;已定义赋值为false</p></div><p><strong>4. 已定义变量,赋值为int</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">flag6</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">flag7</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0.0</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">flag8</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">flag6</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;已定义赋值为0&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;已定义赋值为0&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">flag7</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;已定义赋值为0.0&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;已定义赋值为0.0&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">flag8</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;已定义赋值为3&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;已定义赋值为3&quot;</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">运行结果：</p><p>条件为假---&gt;已定义赋值为0</p><p>条件为假---&gt;已定义赋值为0.0</p><p>条件为真---&gt;已定义赋值为3</p></div><h2 id="_2-函数类型" tabindex="-1">2.函数类型 <a class="header-anchor" href="#_2-函数类型" aria-label="Permalink to &quot;2.函数类型&quot;">​</a></h2><p><strong>1. 已定义函数,不带括号</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">flag11</span><span style="color:#ABB2BF;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">flag11</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;已定义函数不带括号&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;已定义函数不带括号&quot;</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">运行结果：</p><p>条件为真---&gt;已定义函数不带括号</p></div><p><strong>2. 已定义函数,带括号</strong></p><ul><li>相当于调用函数，根据函数的<strong>返回值判断真假</strong></li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">flag12</span><span style="color:#ABB2BF;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#61AFEF;">flag12</span><span style="color:#ABB2BF;">()) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;已定义函数带括号--&gt;无返回值&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;已定义函数带括号--&gt;无返回值&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">flag13</span><span style="color:#ABB2BF;">() {</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#61AFEF;">flag13</span><span style="color:#ABB2BF;">()) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;已定义函数带括号--&gt;返回值为true&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;已定义函数带括号--&gt;返回值为true&quot;</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">运行结果：</p><p>条件为假---&gt;已定义函数带括号--&gt;无返回值</p><p>条件为真---&gt;已定义函数带括号--&gt;返回值为true</p></div><h2 id="_3-对象类型" tabindex="-1">3.对象类型 <a class="header-anchor" href="#_3-对象类型" aria-label="Permalink to &quot;3.对象类型&quot;">​</a></h2><p><strong>1. 已定义对象,未赋值和已赋值</strong></p><ul><li>对象未赋值时，类型未被定义，所有同未赋值的变量一样</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">flag14</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">flag15</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {};</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">flag14</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;已定义对象未赋值&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;已定义对象未赋值&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">flag15</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;已定义对象已赋值&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;已定义对象已赋值&quot;</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">运行结果：</p><p>条件为假---&gt;已定义对象未赋值</p><p>条件为真---&gt;已定义对象已赋值</p></div><p><strong>2. 已定义对象的属性</strong></p><ul><li>对象的属性字段同单独的变量一样，==所以同变量类型一样处理==</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">flag16</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;张三&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">23</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">status</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">flag16</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;name不为空串&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;name不为空串&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">flag16</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">flag16</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;name为空串&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;name为空串&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">flag16</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;age为26&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;age为26&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">flag16</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">flag16</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;age为0&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;age为0&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">flag16</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">status</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;status为true&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;status为true&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">flag16</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">status</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">flag16</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">status</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;status为false&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;status为false&quot;</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">运行结果：</p><p>条件为真---&gt;name不为空串</p><p>条件为假---&gt;name为空串</p><p>条件为真---&gt;age为26</p><p>条件为假---&gt;age为0</p><p>条件为真---&gt;status为true</p><p>条件为假---&gt;status为false</p></div><p><strong>3. 已定义对象的方法</strong></p><ul><li>对象的方法，和单独的函数一样，==所以同函数类型一样处理==</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">flag17</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span><span style="color:#61AFEF;">test01</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {}, </span><span style="color:#61AFEF;">test02</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">}}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">flag17</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">test01</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;方法不带括号&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;方法不带括号&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">flag17</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">test01</span><span style="color:#ABB2BF;">()) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;方法带括号无返回值&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;方法带括号无返回值&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">flag17</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">test02</span><span style="color:#ABB2BF;">()) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;方法带括号有返回值&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;方法带括号有返回值&quot;</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">运行结果：</p><p>条件为真---&gt;方法不带括号</p><p>条件为假---&gt;方法带括号无返回值</p><p>条件为真---&gt;方法带括号有返回值</p></div><h2 id="_4-特殊类型" tabindex="-1">4.特殊类型 <a class="header-anchor" href="#_4-特殊类型" aria-label="Permalink to &quot;4.特殊类型&quot;">​</a></h2><ul><li>变量为特殊值：null, undefined</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">flag9</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">flag10</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">undefined</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">flag9</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;已定义赋值为null&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;已定义赋值为null&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">flag10</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为真---&gt;已定义赋值为undefined&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;条件为假---&gt;已定义赋值为undefined&quot;</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">运行结果：</p><p>条件为假---&gt;已定义赋值为null</p><p>条件为假---&gt;已定义赋值为undefined</p></div>`,39),t=[p];function e(B,c,r,y,F,A){return a(),l("div",null,t)}const g=s(o,[["render",e]]);export{C as __pageData,g as default};
