import{_ as n,o as s,c as a,a as t}from"./app.721c7a1a.js";const p={},e=t(`<h1 id="迭代数组元素" tabindex="-1"><a class="header-anchor" href="#迭代数组元素" aria-hidden="true">#</a> 迭代数组元素</h1><h2 id="keys-values-不推荐" tabindex="-1"><a class="header-anchor" href="#keys-values-不推荐" aria-hidden="true">#</a> keys() values() （不推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;h&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;i&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;j&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;k&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token keyword">of</span> arr1<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token comment">// 0,1,2,3,4,5,6,7,8,9,10</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> val <span class="token keyword">of</span> arr1<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token comment">// a,b,c,d,e,f,g,h,i,j,k</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="array-entries-推荐" tabindex="-1"><a class="header-anchor" href="#array-entries-推荐" aria-hidden="true">#</a> Array.entries() （推荐）</h2><p>entries() 方法返回一个新的数组迭代器对象，该对象包含数组中每个索引的键/值对。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;h&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;i&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;j&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;k&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>index<span class="token punctuation">,</span> element<span class="token punctuation">]</span> <span class="token keyword">of</span> arr1<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> element<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//  0 &#39;a&#39;</span>
<span class="token comment">//  1 &#39;b&#39;</span>
<span class="token comment">//  2 &#39;c&#39;</span>
<span class="token comment">//  3 &#39;d&#39;</span>
<span class="token comment">//  4 &#39;e&#39;</span>
<span class="token comment">//  5 &#39;f&#39;</span>
<span class="token comment">//  6 &#39;g&#39;</span>
<span class="token comment">//  7 &#39;h&#39;</span>
<span class="token comment">//  8 &#39;i&#39;</span>
<span class="token comment">//  9 &#39;j&#39;</span>
<span class="token comment">//  10 &#39;k&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>当数组内有空字符串时 entries()会返回什么？</p>`,8),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","array-element.html.vue"]]);export{r as default};