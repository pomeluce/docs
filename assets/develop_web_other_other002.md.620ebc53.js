import{_ as s,o as a,c as n,V as o}from"./chunks/framework.a215caf7.js";const E=JSON.parse('{"title":"Cors跨域资源共享","description":"","frontmatter":{},"headers":[],"relativePath":"develop/web/other/other002.md","filePath":"develop/web/other/other002.md","lastUpdated":1689440421000}'),l={name:"develop/web/other/other002.md"},p=o(`<h1 id="cors跨域资源共享" tabindex="-1">Cors跨域资源共享 <a class="header-anchor" href="#cors跨域资源共享" aria-label="Permalink to &quot;Cors跨域资源共享&quot;">​</a></h1><h2 id="_1-cors简介" tabindex="-1">1.Cors简介 <a class="header-anchor" href="#_1-cors简介" aria-label="Permalink to &quot;1.Cors简介&quot;">​</a></h2><ul><li>CORS(Cross-Origin Resource Sharing, 跨域资源共享)由一系列 HTTP 响应头组成, 这些 HTTP 响应头决定浏览器是否阻止前端JS代码跨域获取资源</li><li>浏览器的同源安全策略默认会阻止网页&quot;跨域&quot;获取资源, 但如果接口服务器配置了 CORS 相关的 HTTP 响应头, 就可以解除浏览器端的跨域访问限制</li></ul><h2 id="_2-cors响应头信息" tabindex="-1">2.Cors响应头信息 <a class="header-anchor" href="#_2-cors响应头信息" aria-label="Permalink to &quot;2.Cors响应头信息&quot;">​</a></h2><ol><li>Cors响应头部:Access-Control-Allow-Origin</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#E06C75;">Access</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Control</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Allow</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Origin</span><span style="color:#ABB2BF;">: &lt;</span><span style="color:#E06C75;">origin</span><span style="color:#ABB2BF;">&gt; | * , origin参数的值指定了允许访问该资源的外域URL</span></span>
<span class="line"><span style="color:#ABB2BF;">//只允许www.baidu.com的请求</span></span>
<span class="line"><span style="color:#ABB2BF;">res.setHeader(&#39;Access-Control-Allow-Origin&#39;, &#39;http://www.baidu.com&#39;)</span></span>
<span class="line"><span style="color:#ABB2BF;">//运行所有网页都能请求</span></span>
<span class="line"><span style="color:#ABB2BF;">res.setHeader(&#39;Access-Control-Allow-Origin&#39;, &#39;*&#39;)</span></span>
<span class="line"><span style="color:#ABB2BF;">/*</span></span>
<span class="line"><span style="color:#ABB2BF;">	注意:当origin参数设置为通配符*时,将无法响应携带身份信息(Cookie或者HTTP认证信息)的HTTP请求</span></span>
<span class="line"><span style="color:#ABB2BF;">*/</span></span></code></pre></div><ol start="2"><li>Cors响应头部:Access-Control-Allow-Headers</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#D19A66;">1.</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">默认情况下</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">Cors仅支持客户端向服务器发送如下的9个请求头</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E06C75;">Accept</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">Accept</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Language</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">Content</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Language</span><span style="color:#ABB2BF;">、</span><span style="color:#E5C07B;">DPR</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">Downlink</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">Save</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Data</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">Viewport</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Width</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">Width</span><span style="color:#ABB2BF;"> 、</span><span style="color:#E06C75;">Content</span><span style="color:#56B6C2;">-</span><span style="color:#61AFEF;">Type</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">值仅限于</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">text</span><span style="color:#56B6C2;">/</span><span style="color:#E06C75;">plain</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">multipart</span><span style="color:#56B6C2;">/</span><span style="color:#E06C75;">form</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">application</span><span style="color:#56B6C2;">/</span><span style="color:#E06C75;">x</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">www</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">form</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">urlencoded三者之一</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D19A66;">2.</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">如果客户端向服务器发送了额外的请求头信息</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">则需要在服务器端</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">通过</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">Access</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Control</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Allow</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Headers</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">对额外的请求头进行声明</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//手动设置Content-Type, X-Custom-Header请求头</span></span>
<span class="line"><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setHeader</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Access-Control-Allow-Headers&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;Content-Type, X-Custom-Header&#39;</span><span style="color:#ABB2BF;">);</span></span></code></pre></div><ol start="3"><li>Cors响应头部:Access-Control-Allow-Methods</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#D19A66;">1.</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">默认情况下</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">Cors仅支持客户端发起GET</span><span style="color:#ABB2BF;">、</span><span style="color:#E5C07B;">POST</span><span style="color:#ABB2BF;">、</span><span style="color:#E5C07B;">HEAD</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">请求</span></span>
<span class="line"><span style="color:#D19A66;">2.</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">如果客户端希望通过</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">PUT</span><span style="color:#ABB2BF;">、</span><span style="color:#E5C07B;">DELETE</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">等方式请求服务器的资源</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">则需要在服务器端</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">通过Access</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Control</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Alow</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Methods来指明实际请求所允许使用的HTTP方法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//设置只允许发送post, put, delete请求</span></span>
<span class="line"><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setHeader</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Access-Control-Allow-Methods&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;POST, PUT, DELETE&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//设置允许所有http请求</span></span>
<span class="line"><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setHeader</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Access-Control-Allow-Methods&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;*&#39;</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><ol start="4"><li>Cors响应头部:Access-Control-Allow-Credentials</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#E06C75;">它的值是一个布尔值</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">表示是否允许发送cookies</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">authorization</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">headers或TLS</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">client</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">certificates等身份信息</span><span style="color:#ABB2BF;">。</span></span>
<span class="line"><span style="color:#D19A66;">1.</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">CORS请求默认不发送Cookie和HTTP认证信息</span></span>
<span class="line"><span style="color:#D19A66;">2.</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">设为true</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">即表示服务器明确许可</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">Cookie可以包含在请求中</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">一起发给服务器</span><span style="color:#ABB2BF;">。</span></span>
<span class="line"><span style="color:#D19A66;">3.</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">这个值只能设为true</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">如果服务器不要浏览器发送Cookie</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">删除该字段即可</span></span>
<span class="line"><span style="color:#D19A66;">4.</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">必须在AJAX请求中打开withCredentials属性</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">否则</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">即使服务器同意发送Cookie</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">浏览器也不会发送或处理</span></span>
<span class="line"><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setHeader</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Access-Control-Allow-Credentials&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><ol start="5"><li>Cors响应头部:Access-Control-Max-Age</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#E06C75;">单位为秒</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">指定浏览器在本次预检请求的有效期内</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">无需再发送预检请求进行协商</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">直接用本次协商结果即可</span></span>
<span class="line"><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setHeader</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Access-Control-Max-Age&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">30</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><ol start="6"><li>Cors响应头部:Access-Control-Expose-Headers</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#D19A66;">1.</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">跨域请求时</span><span style="color:#ABB2BF;">,</span><span style="color:#61AFEF;">客户端xhr对象的getResponseHeader</span><span style="color:#ABB2BF;">()</span><span style="color:#E06C75;">方法只能拿到6个基本字段</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">Cache</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Control</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">Content</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Language</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">Content</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Type</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">Expires</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">Last</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Modified</span><span style="color:#ABB2BF;">、</span><span style="color:#E06C75;">Pragma</span><span style="color:#ABB2BF;">。</span></span>
<span class="line"><span style="color:#D19A66;">2.</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">要获取其他字段时</span><span style="color:#ABB2BF;">，</span><span style="color:#E06C75;">使用Access</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Control</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Expose</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">Headers</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getResponseHeader</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;name&#39;</span><span style="color:#ABB2BF;">)</span><span style="color:#E06C75;">可以返回我们所需的值</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//设置字段</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setHeader</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;Access-Control-Expose-Headers&quot;</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&quot;name&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//获取字段</span></span>
<span class="line"><span style="color:#E5C07B;">xhr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getResponseHeader</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;name&#39;</span><span style="color:#ABB2BF;">);</span></span></code></pre></div><h2 id="_3-cors请求分类" tabindex="-1">3.Cors请求分类 <a class="header-anchor" href="#_3-cors请求分类" aria-label="Permalink to &quot;3.Cors请求分类&quot;">​</a></h2><p>客户端在请求CORS接口时,根据请求方式和请求头的不同,可以将CORS的请求分为两大类</p><ol><li>简单请求</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">1.请求方式：GET、POST、HEAD 三者之一</span></span>
<span class="line"><span style="color:#abb2bf;">2.HTTP 头部信息不超过以下几种字段：无自定义头部字段、Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width 、Content-Type(只有三个值application/x-www-form-urlencoded、multipart/form-data、text/plain)</span></span></code></pre></div><p><strong>注意: 简单请求,Origin字段为必选项,其他字段为可选项</strong></p><ol start="2"><li>预检请求</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">1.只要符合以下任何一个条件的请求,都需要进行预检请求：</span></span>
<span class="line"><span style="color:#abb2bf;">	a.请求方式为 GET、POST、HEAD 之外的请求 Method 类型</span></span>
<span class="line"><span style="color:#abb2bf;">	b.请求头中包含自定义头部字段</span></span>
<span class="line"><span style="color:#abb2bf;">	c.向服务器发送了 application/json 格式的数据</span></span>
<span class="line"><span style="color:#abb2bf;">2.在浏览器与服务器正式通信之前，浏览器会先发送OPTION请求进行预检，以获知服务器是否允许该实际请求，所以这一次的OPTION请求称为“预检请求”。服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据</span></span></code></pre></div><p><strong>注意: 简单请求,Origin,Hearders,Methods字段为必选项,其他字段为可选项</strong></p>`,24),e=[p];function t(r,c,B,y,C,i){return a(),n("div",null,e)}const F=s(l,[["render",t]]);export{E as __pageData,F as default};
