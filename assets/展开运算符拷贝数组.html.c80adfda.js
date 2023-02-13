import{_ as n,o as a,c as s,a as e}from"./app.721c7a1a.js";const t={},p=e(`<h1 id="展开运算符拷贝数组" tabindex="-1"><a class="header-anchor" href="#展开运算符拷贝数组" aria-hidden="true">#</a> 展开运算符拷贝数组</h1><p>在原数组基础上添加值，并使原数组保持不变</p><h2 id="直接用数组方法添加值-不推荐" tabindex="-1"><a class="header-anchor" href="#直接用数组方法添加值-不推荐" aria-hidden="true">#</a> 直接用数组方法添加值（不推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">//[1,2,3]</span>
<span class="token comment">//得到了我们要的数组，但arr已经改变</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用展开运算符拷贝数组-推荐" tabindex="-1"><a class="header-anchor" href="#使用展开运算符拷贝数组-推荐" aria-hidden="true">#</a> 使用展开运算符拷贝数组（推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">//[1,2]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span> <span class="token comment">//[1,2,3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>如果是多维数组可以达到这种效果吗</p>`,8),c=[p];function o(l,i){return a(),s("div",null,c)}const u=n(t,[["render",o],["__file","展开运算符拷贝数组.html.vue"]]);export{u as default};
