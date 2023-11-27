import{_ as t,o as d,c as e,R as o}from"./chunks/framework.jWGKUnDR.js";const a="/HTTP-Explanation/assets/http-message-format.Tet8PKhn.png",r="/HTTP-Explanation/assets/start-line-format.7_QQk7fD.png",s="/HTTP-Explanation/assets/http-message-format-summary.l4RNElJl.png",b=JSON.parse('{"title":"HTTP报文格式","description":"","frontmatter":{},"headers":[],"relativePath":"docs/overview/http-message-format.md","filePath":"docs/overview/http-message-format.md","lastUpdated":1701048871000}'),i={name:"docs/overview/http-message-format.md"},n=o('<h1 id="http报文格式" tabindex="-1">HTTP报文格式 <a class="header-anchor" href="#http报文格式" aria-label="Permalink to &quot;HTTP报文格式&quot;">​</a></h1><p><strong>HTTP报文是简单的、面向行的字符序列，它承载了HTTP客户端发送请求和服务器返回响应的所有信息，其格式至HTTP/1.0首次定义以来一直沿用至今</strong>。在HTTP/2之前，报文在传输过程中都是使用纯文本，而不是二进制，而HTTP又是使用明文传输，因此非常容易就能窃取HTTP报文中的内容。在 HTTP/2 中这些问题得到了改善，报文被嵌入到了一个新的二进制结构——帧中，虽然报文被嵌入到了新的结构中，但每条报文的语义依旧不变，因此<strong>用之前的报文格式来理解 HTTP/2 报文仍旧有效</strong>。</p><p><strong>HTTP报文有请求、响应两种类型，它们都由起始行、消息头与消息体构成</strong>：</p><ul><li><strong>报文的第一行被称为起始行，起始行是必须存在的</strong>，它包含了请求/响应的基本信息</li><li><strong>报文的第二行至空白行被称为消息头，消息头有些是可选的，有些则是必须的</strong>，它包含了一系列的key：value键值对(key不区分大小写)，用来描述请求或响应的附加信息</li><li><strong>报文的空白行后一行至最后一行被称为消息体，消息体是可选的</strong>，它用来携带请求或响应需要上传/响应的具体内容</li></ul><p>在<code>请求报文中起始行、消息头与消息体又被称为请求行、请求头以及请求体</code>。在<code>响应报文中起始行、消息头与消息体又被称为响应行、响应头以及响应体</code>。<strong>目前HTTP的起始行和消息头仍是使用ASCII编码，而消息体则是根据消息头中的内容协商来决定具体编码方式</strong>。</p><p><img src="'+a+'" alt="http-message-format"></p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>在HTTP/1.1之前，HTTP在传输报文过程中未对报文进行任何压缩处理，随着报文消息体体积逐渐增大，HTTP/1.1对报文中消息体内容进行了压缩处理，后来报文消息头体积也逐渐增大，HTTP/2.0对报文消息头也进行了压缩处理。</p></div><h2 id="起始行" tabindex="-1">起始行 <a class="header-anchor" href="#起始行" aria-label="Permalink to &quot;起始行&quot;">​</a></h2><p><strong>报文中的第一行被称为起始行，它是必须存在的，包含了请求/响应的基本信息</strong>。<code>起始行在请求报文中被称为请求行</code>，<code>在响应报文中又被称为响应行</code>。请求行与响应行有很大的差别：</p><ul><li>请求行由<strong>Method(请求方法)、Path(请求资源路径，通常是一个 URL)以及HTTP/Version(HTTP版本)组成，它们使用空格分隔，以此区别</strong></li><li>响应行由<strong>HTTP/Version(HTTP版本)、Code(状态码)以及Message(返回消息)组成，它们也使用空格分隔，以此区别</strong>。</li></ul><p><img src="'+r+`" alt="start-line-format"></p><h3 id="method" tabindex="-1">Method <a class="header-anchor" href="#method" aria-label="Permalink to &quot;Method&quot;">​</a></h3><p><strong>HTTP 定义了9个请求方法，以表明要对给定资源执行的操作</strong>，每个HTTP请求报文都必须使用一个请求方法来告诉服务器应该执行什么样的操作。</p><table><thead><tr><th>请求方法</th><th>操作</th></tr></thead><tbody><tr><td>GET</td><td><code>GET</code> 方法用于请求获取指定资源的信息，<code>GET</code> 请求应该只被用于获取数据。</td></tr><tr><td>HEAD</td><td><code>HEAD</code>请求与<code>GET</code>请求类似，但是服务器在响应中只返回响应头部信息，而不返回实际的资源内容。<code>HEAD</code>请求常用于获取资源的元数据，如资源的大小、修改时间等，而不需要获取实际的资源内容，以减少不必要的数据传输。</td></tr><tr><td>POST</td><td><code>POST</code> 方法用于向服务器提交数据，<code>POST</code>请求通常会对服务器状态进行修改。</td></tr><tr><td>PUT</td><td><code>PUT</code> 方法用于向服务器上传或更新指定资源的内容，<code>PUT</code>请求通常用于更新已存在的资源，如果资源不存在，则可以创建一个新资源。</td></tr><tr><td>DELETE</td><td><code>DELETE</code> 方法用于请求删除服务器上指定的资源。</td></tr><tr><td>PATCH</td><td><code>PATCH</code> 方法用于对资源进行部分修改。</td></tr><tr><td>OPTIONS</td><td><code>OPTIONS</code>方法用于获取服务器支持的请求方法和资源的通信选项，当发送一个<code>OPTIONS</code>请求时，服务器会返回一个包含允许的请求方法、支持的头部字段等信息的响应。</td></tr><tr><td>TRACE</td><td><code>TRACE</code>请求用于追踪请求-响应的传输路径。当发送一个<code>TRACE</code>请求时，服务器会原样返回请求中的数据，这样客户端就可以查看中间代理服务器对请求的修改情况，用于诊断和调试网络传输问题。</td></tr><tr><td>CONNECT</td><td><code>CONNECT</code>请求用于在客户端和服务器之间建立隧道连接，以此进行加密通信或代理服务器的连接。</td></tr></tbody></table><p>请求方法可以被分为<strong>安全/不安全的方法</strong>、<strong>幂等/不幂等的方法</strong>以及<strong>可被缓存/不可被缓存的方法</strong>。</p><h4 id="幂等的请求方法" tabindex="-1">幂等的请求方法 <a class="header-anchor" href="#幂等的请求方法" aria-label="Permalink to &quot;幂等的请求方法&quot;">​</a></h4><p><strong>幂等的请求方法指的是同样的请求被执行一次与连续执行多次的效果是一样的，服务器的状态也是一样的。</strong> 在正确实现的条件下， <code>GET</code> ， <code>HEAD</code>、<code>PUT</code>、<code>DELETE</code>、<code>OPTIONS</code>以及<code>TRACE</code>等方法都是幂等的方法。其他方法不幂等的原因如下：</p><ul><li><code>CONNECT</code>方法因为它涉及建立网络连接，而连接的状态可能会因多次执行而不同，所以它并不是幂等的方法。</li><li><code>POST</code>用于向资源提交数据，多次执行相同的<code>POST</code>请求通常会导致资源状态的改变，因为每次请求可能会创建新的资源或者对现有资源进行修改。但是，具体是否幂等取决于服务器的实现，有些服务器可以对相同的<code>POST</code>请求进行幂等处理。</li><li><code>PATCH</code>方法用于对资源进行局部更新，多次执行相同的<code>PATCH</code>请求通常会产生相同的结果，因为它们只是更新资源的一部分。但是，具体是否幂等取决于服务器的实现，因为某些情况下，多次执行相同的<code>PATCH</code>请求可能会导致不同的结果，例如，如果同时有其他并发请求影响了资源的状态。</li></ul><div class="tip custom-block"><p class="custom-block-title"><strong><code>TRACE</code>方法也涉及到网络连接，为什么它是幂等的？</strong></p><p>虽然<code>TRACE</code>方法确实涉及到网络连接，但它的主要目的是用于诊断和调试，而不是对服务器上的资源进行修改，这就是为什么<code>TRACE</code>方法被认为是幂等的原因。</p></div><table><thead><tr><th>是否幂等</th><th>请求方法</th></tr></thead><tbody><tr><td>幂等</td><td>GET、HEAD、OPTIONS、PUT、DELETE、TRACE</td></tr><tr><td>不幂等</td><td>PATCH、CONNECT、POST</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">尽管HTTP协议中有些方法通常被认为是幂等的，但实际情况取决于服务器的具体实现和应用的语义</p><p>即使HTTP方法在协议层面上被设计为幂等，服务器的实现也可能导致多次执行相同的请求产生不同的结果。例如，服务器可能会在幂等的<code>PUT</code>请求中处理并发修改冲突，这可能导致请求在不同的时间点执行时产生不同的效果。</p><p>因此，对于开发者来说，重要的是要理解服务器的实现细节，以确保在应用中正确处理幂等性，例如使用适当的请求头部或处理机制，以确保多次执行相同的请求不会引起问题。幂等性是一种设计和实现的考虑因素，而不仅仅是HTTP方法本身的属性。</p></div><h4 id="安全的请求方法" tabindex="-1">安全的请求方法 <a class="header-anchor" href="#安全的请求方法" aria-label="Permalink to &quot;安全的请求方法&quot;">​</a></h4><p><strong>安全的请求方法指这些方法不会修改服务器的数据以及改变服务器的状态</strong>，也就是说，这是一个对服务器只读操作的方法。不难发现在正确实现的条件下，<strong><code>GET</code>、<code>HEAD</code> 、 <code>OPTIONS</code>、<code>TRACE</code>都是对服务器只读操作的方法，因此它们是安全的方法</strong>。<strong>所有安全的方法都是幂等的，但并非所有幂等方法都是安全的</strong>，例如，<code>PUT</code> 和 <code>DELETE</code> 都是幂等的，但不是安全的。</p><table><thead><tr><th>是否安全</th><th>请求方法</th></tr></thead><tbody><tr><td>安全</td><td>GET、HEAD、OPTIONS、TRACE</td></tr><tr><td>不安全</td><td>POST、PATCH、PUT、DELETE、CONNECT</td></tr></tbody></table><h4 id="可被缓存的请求方法" tabindex="-1">可被缓存的请求方法 <a class="header-anchor" href="#可被缓存的请求方法" aria-label="Permalink to &quot;可被缓存的请求方法&quot;">​</a></h4><p><strong>HTTP协议定义了一些请求方法，其中一些方法通常可以被缓存。</strong> 可被缓存的请求方法是那些在满足特定条件下，可以被缓存代理服务器（如HTTP缓存）缓存的方法。以下是常见的能否被缓存的HTTP请求方法：</p><ul><li><strong><code>GET</code>、<code>HEAD</code>和<code>OPTIONS</code>方法： <code>GET</code>、<code>HEAD</code>和<code>OPTIONS</code>方法通常被认为是可缓存的</strong>，因为它们是幂等且安全的，而且不会改变服务器状态。这意味着代理服务器可以缓存它们的响应，以提高性能并减轻服务器负载。</li><li><strong><code>POST</code>和<code>PATCH</code>方法：<code>POST</code>和<code>PATCH</code>方法的响应通常不会被缓存</strong> ，因为它们通常用于向服务器提交数据，可能会改变服务器状态。然而，如果响应中指定了有效期（例如，通过<code>Cache-Control</code>头部）并设置了<code>Content-Location</code>头部，那么它们的响应可以被缓存。这种情况下，缓存代理服务器可以将响应缓存，并在之后的请求中使用。但这种情况下的缓存行为在实际应用中相对较少见，并且有些浏览器并不支持(例如Firefox 就不支持它<a href="https://bugzil.la/109553" target="_blank" rel="noreferrer">Firefox bug 109553</a>)，因此通常不鼓励缓存<code>POST</code>请求的响应。</li><li><strong><code>PUT</code>和<code>DELETE</code>方法： <code>PUT</code> 和 <code>DELETE</code> 方法的响应通常不会被缓存</strong>，即使设置了有效期（通过<code>Cache-Control</code>头部）和<code>Content-Location</code>标头。这是因为这两个请求方法通常用于对资源进行修改或删除，可能会改变服务器的状态，因此响应不适合被缓存。</li><li><strong><code>CONNECT</code> 方法：<code>CONNECT</code> 方法的响应通常不会被缓存</strong> ，即使设置了有效期（通过<code>Cache-Control</code>头部）和<code>Content-Location</code>标头。<code>CONNECT</code> 方法用于建立网络连接，通常用于代理服务器。由于 <code>CONNECT</code> 方法的目的是在客户端和目标服务器之间建立连接，而不是获取资源，所以 <code>CONNECT</code> 方法的响应通常不会被缓存。代理服务器通常不会缓存 <code>CONNECT</code> 方法的响应，因为它们不包含可被缓存的资源数据。</li><li><strong><code>TRACE</code> 方法：<code>TRACE</code> 方法的响应通常不会被缓存</strong> ，即使设置了有效期（通过<code>Cache-Control</code>头部）和<code>Content-Location</code>标头。<code>TRACE</code> 方法用于在目标服务器上执行一个诊断测试，它返回由服务器收到的请求的副本。由于 <code>TRACE</code> 方法的主要目的是用于诊断和调试，而不是对服务器上的资源进行修改，因此 <code>TRACE</code> 方法的响应通常不会被缓存。代理服务器通常不会缓存 <code>TRACE </code>方法的响应，因为这些响应只包含请求的副本，不包含可被缓存的资源数据。</li></ul><table><thead><tr><th>能否缓存</th><th>请求方法</th></tr></thead><tbody><tr><td>可被缓存</td><td>GET、HEAD、OPTIONS</td></tr><tr><td>可被缓存，但不鼓励且支持少</td><td>POST、PATCH</td></tr><tr><td>不可被缓存</td><td>PUT、DELETE、CONNECT、TRACE</td></tr></tbody></table><h3 id="path" tabindex="-1">Path <a class="header-anchor" href="#path" aria-label="Permalink to &quot;Path&quot;">​</a></h3><p><strong>Path请求资源路径用来表示要请求的资源的网络位置，Path有多种形式：它可以是一个相对URL、也可以是一个绝对URL、也可以仅由一个星号（*）组成</strong>。使用什么形式通常以请求方法、请求的环境为以及请求的格式来决定。</p><p>Path的形式：</p><ul><li><p><strong>相对URL：</strong> 这是最常见的形式，除了<code>CONNECT</code>方法都可以使用。</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/ </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/background.png </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/test.html?query=alibaba</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/anypage.html</span></span></code></pre></div></li><li><p><strong>绝对URL：</strong> 主要在使用 <code>GET</code> 方法连接到代理时使用。</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://wangjunliang.com/HTTP-Explanation/index.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://wangjunliang.com/HTML-Guide/index.html</span></span></code></pre></div></li><li><p><strong>包含端口的绝对URL：</strong> 在使用 <code>CONNECT</code> 建立 HTTP 隧道时才使用。</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://wangjunliang.com:80</span></span></code></pre></div></li><li><p><strong>一个星号：</strong> 配合 <code>OPTIONS</code> 方法使用，代表整个服务器。</p><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*</span></span></code></pre></div></li></ul><div class="tip custom-block"><p class="custom-block-title">起始行仍是ASCII编码，那么其中URL中的中文是如何处理的呢？</p><p>我们都知道ASCII编码仅表示了英文小大写、数字以及一些标点符号，对于其他国家的语言是并不支持的，那么请求头中的其他国家的语言的信息如何处理呢？</p><blockquote><p>我尝试使用浏览器访问以中文命名的HTML，URL：<a href="https://wangjunliang.com/%E6%88%91%E6%83%B3%E7%9C%8B%E7%9C%8B.html" target="_blank" rel="noreferrer">wangjunliang.com/我想看看.html</a></p></blockquote><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">请求网址</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://www.wangjunliang.com/%E6%88%91%E6%83%B3%E7%9C%8B%E7%9C%8B.html</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">请求方法</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GET</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">状态代码</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">200</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">远程地址</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">127.0.0.1:7890</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">引荐来源网址政策</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">strict-origin-when-cross-origin</span></span></code></pre></div><p>惊奇的发现在请求头中<code>我想看看</code>转换为了<code>%E6%88%91%E6%83%B3%E7%9C%8B%E7%9C%8B</code>，这就是传说中的URL编码。</p><p><strong>URL编码：</strong> URL 编码是一种将特殊字符和非 ASCII 字符转换为 ASCII 字符的方法，使它们能够在 HTTP 请求的 URL 中进行传输。具体而言，URL 编码使用 &quot;%&quot; 符号后跟两个十六进制数字来表示一个字符。例如，中文字符 &quot;中&quot; 的 URL 编码表示为 &quot;%E4%B8%AD&quot;。这个编码表示了字符 &quot;中&quot; 在 ASCII 字符集中的十六进制表示。当 HTTP的请求或响应中包含中文字符时，这些字符会被转换成对应的 URL 编码形式。服务器收到 URL 编码后的请求后，会将其还原为原始的中文字符进行处理。需要注意的是，HTTP 的 URL 编码仅适用于 URL 中的字符编码。</p></div><h3 id="http-version" tabindex="-1">HTTP/Version <a class="header-anchor" href="#http-version" aria-label="Permalink to &quot;HTTP/Version&quot;">​</a></h3><p><strong>HTTP/Version表明了客户端请求使用的HTTP协议版本，并期望服务器相同的协议版本响应</strong>。目前有HTTP/0.9、HTTP/1.0、HTTP/1.1、HTTP/2.0以及HTTP/3.0五种取值，随着HTTP不断发展后续也会有更多的版本。</p><h3 id="code与message" tabindex="-1">Code与Message <a class="header-anchor" href="#code与message" aria-label="Permalink to &quot;Code与Message&quot;">​</a></h3><p><strong>Code状态码是服务器返回的响应报文响应行中一个三位数字代码，用于表示服务器处理请求的结果状态</strong>。它们提供了关于请求是否成功、出现错误的类型以及如何处理请求的信息。</p><p>HTTP响应状态码由三个数字组成，分别表示响应的类别：</p><ul><li><strong>1xx：信息性状态码，表示服务器接收到请求并继续处理。</strong></li><li><strong>2xx：成功状态码，表示服务器成功处理了请求。</strong></li><li><strong>3xx：重定向状态码，表示需要进一步操作以完成请求。</strong></li><li><strong>4xx：客户端错误状态码，表示客户端发送的请求有错误。</strong></li><li><strong>5xx：服务器错误状态码，表示服务器在处理请求时发生了错误。</strong></li></ul><p><strong>Message返回消息是服务器返回的响应报文响应行中一个可选的文本描述，返回消息提供了对状态码的进一步解释，使客户端能够更好地理解服务器处理请求的结果</strong>。通常称为&quot;Reason-Phrase&quot;，它紧跟在状态码后面，以便更清楚地说明状态码的含义。</p><div class="tip custom-block"><p class="custom-block-title">HTTP响应状态码与返回消息是绑定的。每个HTTP响应状态码都有一个对应的返回消息，用于提供有关状态码的更详细描述。</p></div><h4 id="信息性状态码-1xx" tabindex="-1">信息性状态码：1xx <a class="header-anchor" href="#信息性状态码-1xx" aria-label="Permalink to &quot;信息性状态码：1xx&quot;">​</a></h4><table><thead><tr><th>状态码</th><th>返回消息</th><th>作用</th></tr></thead><tbody><tr><td>100</td><td>Continue</td><td>这个临时响应表明，迄今为止的所有内容都是可行的，客户端应该继续请求，如果已经完成，则忽略它。</td></tr><tr><td>101</td><td>Switching Protocols</td><td>该代码是响应客户端的 <code>Upgrade</code>请求头发送的，指明服务器即将切换的协议。</td></tr><tr><td>102</td><td>Processing</td><td>该代码是一个临时的状态码，用于指示服务器已经接收到请求并且正在处理，但尚未完成处理。这个状态码通常用于长时间运行的请求或者需要进行大量计算的请求。</td></tr><tr><td>103</td><td>Early Hints</td><td>此状态代码主要用于与<code>Link</code>消息头一起使用，以允许用户代理在服务器准备响应阶段时开始预加载preloading资源。当服务器收到客户端的请求后，如果服务器能够提前获取到一些与请求相关的资源或者其他信息，它可以使用103状态码来发送这些信息的响应头部给客户端。这样，客户端在接收到完整的响应之前，就可以开始预加载或处理这些额外的信息，从而提高页面加载速度和用户体验。该状态码仍处于实验阶段。</td></tr></tbody></table><h4 id="成功状态码-2xx" tabindex="-1">成功状态码：2xx <a class="header-anchor" href="#成功状态码-2xx" aria-label="Permalink to &quot;成功状态码：2xx&quot;">​</a></h4><table><thead><tr><th>状态码</th><th>返回消息</th><th>作用</th></tr></thead><tbody><tr><td>200</td><td>OK</td><td>请求成功并已正确处理返回</td></tr><tr><td>201</td><td>Create</td><td>请求成功，并因此创建了一个新的资源。这通常是在 POST 请求，或是某些 PUT 请求之后返回的响应。</td></tr><tr><td>202</td><td>Accepted</td><td>表示请求已被接受，但处理尚未完成。通常情况下，服务器会在响应中包含一个描述性的消息或链接，以便客户端可以进一步跟踪请求的处理进度。这通常用在异步操作或批量操作的场景中</td></tr><tr><td>203</td><td>Non-Authoritative Information</td><td>表示服务器已成功处理请求，但返回的信息可能来自于另一个源。通常用于代理服务器的场景，表示代理服务器已经接收到请求并成功处理，但返回的响应内容是从其他服务器获取的，这种情况下，响应中会包含一个描述性的消息或链接，指示客户端可以从其他源获取更详细的信息。</td></tr><tr><td>204</td><td>No Content</td><td>表示请求成功处理，但没有返回内容。</td></tr><tr><td>205</td><td>Reset Content</td><td>表示请求成功处理，要求客户端重置（Reset）当前页面。</td></tr><tr><td>206</td><td>Partial Content</td><td>表示服务器成功处理了部分GET请求，只返回了请求范围内的部分内容。通常用于对资源进行分段下载以及断点续传的场景</td></tr></tbody></table><h4 id="重定向状态码-3xx" tabindex="-1">重定向状态码：3xx <a class="header-anchor" href="#重定向状态码-3xx" aria-label="Permalink to &quot;重定向状态码：3xx&quot;">​</a></h4><table><thead><tr><th>状态码</th><th>返回消息</th><th>作用</th></tr></thead><tbody><tr><td>300</td><td>Multiple Choice</td><td>请求拥有多个可能的响应，用户代理或者用户应当从中选择一个。服务器在响应中会包含一个Location头部字段，其中列出了多个可供选择的资源的URL 。 客户端可以根据自己的需求选择其中一个URL进行进一步的请求。需要注意的是，300状态码并不会自动重定向到其中的某个URL，而是提供了多个选择供客户端选择。</td></tr><tr><td>301</td><td>Moved Permanently</td><td>请求资源的 URL 已永久更改，在响应中给出了新的 URL。当服务器返回301状态码时，客户端会被告知该资源已经永久移动，并且会在响应的Location头部字段中提供新的URL。客户端收到301响应后， 会使用相同的请求方法(一些浏览器可能将POST请求自动转换为GET请求)自动重定向到新的URL，以便获取所请求的资源。</td></tr><tr><td>302</td><td>Found</td><td>请求资源的 URL 临时移动到了一个不同的URL，在响应中给出了新的 URL。当服务器返回302状态码时 ，客户端会被告知该资源已经临时移动，并且会在响应的Location头部字段中提供新的URL。与301状态码不同，302状态码表示所请求的资源只是临时移动，而不是永久性的移动。客户端收到302响应后，会使用相同的请求方式(一些浏览器可能会将将POST请求自动转换为GET请求)自动重定向到新的URL</td></tr><tr><td>303</td><td>See Other</td><td>表示请求的资源可以在另一个URL上找到，并且客户端应该使用GET方法去获取该资源。当服务器返回303状态码时，客户端会被告知所请求的资源可以在另一个URL上找到，并且在响应的Location头部字段中提供新的URL。与302状态码类似，客户端会自动重定向到新的URL，但是在重定向时会使用GET方法。</td></tr><tr><td>304</td><td>Not Modified</td><td>用于缓存的目的，表示所请求的资源在客户端缓存中仍然有效，并且可以直接使用缓存的副本。当客户端发送一个GET请求时，服务器会检查该请求中的If-Modified-Since或If-None-Match头部字段，这些字段包含了之前获取该资源时服务器返回的Last-Modified或ETag值。如果服务器判断该资源自上次请求以来没有发生变化，就会返回304状态码，告知客户端可以使用缓存的副本。</td></tr><tr><td>307</td><td>Temporary Redirect</td><td>请求的资源的 URL 临时移动到了另一个URL，在响应中给出了新的URL。与302状态码类似，当服务器返回307状态码时，客户端会被告知所请求的资源临时移动到了另一个URL上，并且在响应的Location头部字段中提供新的URL。客户端会自动重定向到新的URL，但在重定向时会保持原始的请求方法(解决了302一些浏览器会将POST转换为GET的问题)。</td></tr><tr><td>308</td><td>Permanent Redirect</td><td>请求资源的 URL 已永久更改，在响应中给出了新的 URL。当服务器返回308状态码时，客户端会被告知该资源已经永久移动，并且会在响应的Location头部字段中提供新的URL。客户端会自动重定向到新的URL，但在重定向时会保持原始的请求方法(解决了301一些浏览器会将POST转换为GET的问题)。</td></tr></tbody></table><h4 id="客户端错误状态码-4xx" tabindex="-1">客户端错误状态码：4xx <a class="header-anchor" href="#客户端错误状态码-4xx" aria-label="Permalink to &quot;客户端错误状态码：4xx&quot;">​</a></h4><table><thead><tr><th>状态码</th><th>返回消息</th><th>作用</th></tr></thead><tbody><tr><td>400</td><td>Bad Request</td><td>由于被认为是客户端错误（例如，错误的请求语法、无效的请求消息帧或欺骗性的请求路由），服务器无法或不会处理请求。</td></tr><tr><td>401</td><td>Unauthorized</td><td>表示请求需要用户进行身份验证，但是发送请求的客户端未提供有效的凭据，或者根本没有提供任何凭据。</td></tr><tr><td>402</td><td>Payment Required</td><td>此响应代码保留供将来使用。创建此代码的最初目的是将其用于数字支付系统，但是此状态代码很少使用，并且不存在标准约定。</td></tr><tr><td>403</td><td>Forbidden</td><td>客户端没有访问内容的权限；也就是说，它是未经授权的，因此服务器拒绝提供请求的资源。与401 Unauthorized不同，服务器知道客户端的身份。</td></tr><tr><td>404</td><td>Not Found</td><td>服务器找不到请求的资源。</td></tr><tr><td>405</td><td>Method Not Allowed</td><td>服务器知道请求方法，但目标资源不支持该方法。</td></tr><tr><td>406</td><td>Not Acceptable</td><td>表示服务器无法根据客户端发送的请求中的Accept头部字段，提供与客户端可接受的响应内容格式相匹配的响应。</td></tr><tr><td>407</td><td>Proxy Authentication Required</td><td>类似于 <code>401 Unauthorized</code> 但是认证需要由代理完成。</td></tr><tr><td>408</td><td>Request Timeout</td><td>此响应由一些服务器在空闲连接上发送，即使客户端之前没有任何请求。这意味着服务器想关闭这个未使用的连接。由于一些浏览器，如 Chrome、Firefox 27+ 或 IE9，使用 HTTP 预连接机制来加速冲浪，所以这种响应被使用得更多。还要注意的是，有些服务器只是关闭了连接而没有发送此消息。</td></tr><tr><td>409</td><td>Conflict</td><td>表示服务器在处理请求时发现了冲突，无法完成请求。在进行资源更新或修改操作时，如果服务器检测到当前资源状态与请求中的条件不符合，就会返回409状态码。</td></tr><tr><td>410</td><td>Gone</td><td>当请求的内容已从服务器中永久删除且没有转发地址时，将发送此响应，客户端需要删除缓存和指向资源的链接</td></tr><tr><td>411</td><td>Length Required</td><td>表示服务器要求在请求中包含有效的Content-Length头字段，用于指定请求正文的长度。</td></tr><tr><td>412</td><td>Precondition Failed</td><td>表示服务器在处理请求时，发现请求中包含的某些前提条件不满足。当使用条件请求头字段如If-Match或If-Unmodified-Since时，服务器会比较请求头中的条件与资源的当前状态。如果条件不匹配或资源在指定时间之后被修改过，则服务器会返回412状态码。当使用条件请求头字段如If-None-Match或If-Modified-Since时，服务器会比较请求头中的条件与资源的当前状态。如果条件匹配或资源在指定时间之后未被修改过，则服务器会返回412状态码。</td></tr><tr><td>413</td><td>Payload Too Large</td><td>表示请求实体（负载）的大小超过了服务器设定的限制。如果请求负载超过了服务器定义的限制，服务器可能会选择关闭与客户端的连接，以避免处理过大的请求负载。服务器也可能返回重试信息，在响应中包含一个Retry-After标头字段，指示客户端在多长时间后可以重试请求。这允许客户端知道何时重新发送较小的请求</td></tr><tr><td>414</td><td>URI Too Long</td><td>客户端请求的 URI 比服务器愿意接收的长度长。</td></tr><tr><td>415</td><td>Unsupported Media Type</td><td>服务器不支持请求数据的媒体格式，因此服务器拒绝请求。</td></tr><tr><td>416</td><td>Range Not Satisfiable</td><td>表示服务器无法满足请求中 <code>Range</code> 标头字段指定的范围。该范围可能无效或超出了目标资源数据的大小。</td></tr><tr><td>417</td><td>Expectation Failed</td><td>表示服务器无法满足请求中的Expect请求头字段指定的预期条件</td></tr><tr><td>418</td><td>I&#39;m a teapot</td><td>服务端拒绝用茶壶煮咖啡。笑话，典故来源<a href="https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E5%92%96%E5%95%A1%E5%A3%B6%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE" target="_blank" rel="noreferrer">茶壶冲泡咖啡</a></td></tr><tr><td>421</td><td>Misdirected Request</td><td>表示服务器无法处理请求，因为请求被发送到了错误的资源。</td></tr><tr><td>425</td><td>Too Early</td><td>表示服务器拒绝处理请求，因为请求的时间过早。该状态码通常与WebRTC（Web实时通信）相关，用于指示客户端在协议协商之前发送了请求。WebRTC是一种用于实时音视频通信的开放标准，它涉及到协议协商和建立连接的过程。在进行协议协商之前，客户端不应该发送任何请求。该状态码处于实验阶段。</td></tr><tr><td>426</td><td>Upgrade Required</td><td>服务器拒绝使用当前协议执行请求，但在客户端升级到其他协议后可能愿意这样做。 服务端发送带有<code>Upgrade</code> 字段的 426 响应 来表明它所需的协议。</td></tr><tr><td>428</td><td>Precondition Required</td><td>表示服务器要求客户端在发送请求之前满足某些先决条件。在收到428状态码时，客户端应该检查响应的头部信息，特别是Precondition-Required头部字段。该字段通常会指定客户端需要满足的先决条件，例如提供正确的<code>If-Match</code>或<code>If-None-Match</code>头部字段，或者提供适当的验证令牌。</td></tr><tr><td>429</td><td>Too Many Requests</td><td>用户在给定的时间内发送了太多请求（&quot;限制请求速率&quot;）</td></tr><tr><td>431</td><td>Request Header Fields Too Large</td><td>服务器不愿意处理请求，因为其头字段太大。在减小请求头字段的大小后，可以重新提交请求。</td></tr><tr><td>451</td><td>Unavailable For Legal Reasons</td><td>请求了无法合法提供的资源，例如政府审查的网页。</td></tr></tbody></table><h4 id="服务器错误状态码-5xx" tabindex="-1">服务器错误状态码：5xx <a class="header-anchor" href="#服务器错误状态码-5xx" aria-label="Permalink to &quot;服务器错误状态码：5xx&quot;">​</a></h4><table><thead><tr><th>状态码</th><th>返回消息</th><th>作用</th></tr></thead><tbody><tr><td>500</td><td>Internal Server Error</td><td>表示服务器内部错误。当服务器在处理请求时遇到了意外错误或异常情况，无法完成请求时，会返回500状态码给客户端。</td></tr><tr><td>501</td><td>Not Implemented</td><td>表示服务器不支持客户端所请求的功能或方法。当客户端发送的请求方法是服务器不支持的，或者服务器无法满足请求所需的功能时，会返回501状态码。</td></tr><tr><td>502</td><td>Bad Gateway</td><td>表示作为代理服务器的网关从上游服务器（通常是应用服务器或另一个代理服务器）接收到无效的响应。这可能是由于上游服务器出现故障、网络连接问题或配置错误等原因导致的。简单来说，502错误意味着代理服务器无法正确地转发请求并获得有效的响应。</td></tr><tr><td>503</td><td>Service Unavailable</td><td>表示服务器当前无法处理请求，通常是由于服务器过载或维护导致的。这是一个临时错误，表示服务器暂时无法提供请求的服务。这个响应应该用于临时条件，如果可能的话，响应标头 <code>Retry-After</code> 字段应该包含恢复服务之前的估计时间。网站管理员还必须注意与此响应一起发送的与缓存相关的标头，因为这些临时条件响应通常不应被缓存。</td></tr><tr><td>504</td><td>Gateway Timeout</td><td>表示代理服务器在尝试转发请求时，未能及时从上游服务器接收到响应。这通常是由于上游服务器处理时间过长、连接超时或网络问题导致的。简单来说，504错误意味着代理服务器等待上游服务器响应的时间超过了预设的超时时间。</td></tr><tr><td>505</td><td>HTTP Version Not Supported</td><td>表示服务器不支持请求中使用的 HTTP 版本。</td></tr><tr><td>506</td><td>Variant Also Negotiates</td><td>表示服务器有多个可供选择的表示形式（变体）可用于响应客户端请求时，服务器可以使用内容协商机制来确定最适合客户端的表示形式。然而，如果服务器无法确定最佳的变体，或者服务器拒绝进行协商，就会返回506状态码。</td></tr><tr><td>510</td><td>Not Extended</td><td>表示服务器需要对请求进行进一步扩展才能完成请求。当服务器收到一个请求，但需要额外的扩展来满足请求时，可以返回510状态码。这通常发生在服务器要求客户端提供更多信息或使用特定的扩展头部字段时。510状态码的出现是为了以后的HTTP协议扩展预留的，以便在需要时可以定义新的扩展状态码。在实际应用中，510状态码的使用相对较少，因为大多数常见的HTTP请求可以通过现有的状态码来处理。</td></tr><tr><td>511</td><td>Network Authentication Required</td><td>表示客户端需要进行身份验证才能获得网络访问权限。</td></tr></tbody></table><h2 id="消息头" tabindex="-1">消息头 <a class="header-anchor" href="#消息头" aria-label="Permalink to &quot;消息头&quot;">​</a></h2><p><strong>报文的第二行至空白行被称为消息头，它包含了一系列的key：value键值对(key不区分大小写)，用来进一步描述请求或消息体，有些消息头是可选的，有些则是必须的</strong>。<code>消息头在请求报文中被称为请求头,在响应报文中又被称为响应头</code>，请求头与响应头有些可以共用，有些则只能专用，为此它们有以下分类：</p><ul><li>请求与响应都可使用的key被称为<strong>通用标头</strong></li><li>请求报文专用的key称为<strong>请求标头</strong></li><li>响应报文专用的key称为<strong>响应标头</strong></li><li>用于标识消息体相关内容的key被称为<strong>实体标头</strong></li></ul><div class="danger custom-block"><p class="custom-block-title">消息头仍是ASCII编码，请勿直接传输中文内容</p><p>HTTP消息头目前仍是基于ASCII编码的，通常采用ASCII字符集。这意味着它只能包含ASCII字符，无法直接包含非ASCII字符，如中文字符。</p><p>如果非要在HTTP标头中传输中文或其他非ASCII字符，可以使用URL或Base64对这些字符进行编码。并将编码后的结果放在标头字段中。在接收方收到标头时，使用同样的方式对URL进行解码，还原为原始的中文字符。</p><p>需要注意的是，HTTP标头的大小有限制，通常限制在几KB或更小的范围。因此，在使用中文字符或其他非ASCII字符时，应注意减少标头字段的大小，避免超过限制。</p></div><h2 id="消息体" tabindex="-1">消息体 <a class="header-anchor" href="#消息体" aria-label="Permalink to &quot;消息体&quot;">​</a></h2><p><strong>报文的空白行后一行至最后一行被称为消息体，它用来携带请求或响应需要上传/响应的具体内容，消息体是可选的。</strong> 不是所有的请求都消息体：例如获取资源的请求，像 <code>GET</code>、<code>HEAD</code>、<code>DELETE</code> 和 <code>OPTIONS</code>，通常它们不需要主体，同样的也不是所有的响应都有消息体。<code>消息体在请求报文中被称为请求体,在响应报文中又被称为响应体</code> 。请求体与响应体都可以分为两类：</p><ul><li>单一资源（Single-resource）主体，由一个单文件组成。该类型的主体由两个标头定义：Content-Type 和 Content-Length。</li><li>多资源（Multiple-resource）主体，由多部分主体组成，每一部分包含不同的信息位。通常是和HTML 表单连系在一起。</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p><img src="`+s+'" alt="http-message-format-summary"></p><table><thead><tr><th></th><th>请求报文</th><th>响应报文</th><th>差别</th></tr></thead><tbody><tr><td>起始行</td><td>名称：请求行<br>由method(方法)、path(请求资源地址)以及http/version(http版本)组成</td><td>名称：响应行<br>由http/version(http版本)、code(状态码)以及message(消息)组成</td><td>完全不同</td></tr><tr><td>消息头</td><td>请求头<br>由一系列的key:value键值对组成</td><td>响应头<br>由一系列的key:value键值对组成</td><td>请求与响应都可使用的被称为<strong>通用标头</strong><br>请求报文专用称为<strong>请求标头</strong><br>响应报文专用称为<strong>响应标头</strong><br>消息体专用被称为<strong>实体标头</strong></td></tr><tr><td>消息体</td><td>请求体</td><td>响应体</td><td>需要上传的内容/需要响应的内容，它们都可分为单一或多资源主体</td></tr></tbody></table><details class="details custom-block"><summary>🎈本节参考</summary><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#http_%E6%8A%A5%E6%96%87" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#http_报文</a></li><li><a href="https://www.javatpoint.com/http-message" target="_blank" rel="noreferrer">https://www.javatpoint.com/http-message</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status</a></li><li><a href="https://www.oreilly.com/library/view/http-the-definitive/1565925092/ch01s05.html" target="_blank" rel="noreferrer">https://www.oreilly.com/library/view/http-the-definitive/1565925092/ch01s05.html</a></li></ul></details><p>转载需要经过本人同意，并标明出处！</p>',63),l=[n];function c(h,p,T,g,E,u){return d(),e("div",null,l)}const k=t(i,[["render",c]]);export{b as __pageData,k as default};
