import{_ as s,o as n,c as a,a as e}from"./app.721c7a1a.js";const p={},t=e(`<h1 id="主题配置" tabindex="-1"><a class="header-anchor" href="#主题配置" aria-hidden="true">#</a> 主题配置</h1><h2 id="配置-logo" tabindex="-1"><a class="header-anchor" href="#配置-logo" aria-hidden="true">#</a> 配置 Logo</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;现代前端开发指南&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;大道至简，让前端开发更简单&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;images/logo.png&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深色主题-logo" tabindex="-1"><a class="header-anchor" href="#深色主题-logo" aria-hidden="true">#</a> 深色主题 Logo</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;images/logo.png&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">logoDark</span><span class="token operator">:</span> <span class="token string">&#39;images/logo-dark.gif&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// navbar</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加-在-github-上编辑此页-链接" tabindex="-1"><a class="header-anchor" href="#添加-在-github-上编辑此页-链接" aria-hidden="true">#</a> 添加 “在 GitHub 上编辑此页” 链接</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;images/logo.png&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">logoDark</span><span class="token operator">:</span> <span class="token string">&#39;images/logo-dark.gif&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;digitalchina-frontend/digitalchina-frontend.github.io&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">docsDir</span><span class="token operator">:</span> <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// navbar</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[t];function i(l,r){return n(),a("div",null,o)}const d=s(p,[["render",i],["__file","theme-setting.html.vue"]]);export{d as default};
