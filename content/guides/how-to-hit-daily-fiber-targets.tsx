import type { ReactElement } from "react";

export const intro: ReactElement = (
  <>
    <p>
      Approximately 95% of adults in the US and UK fail to meet daily fiber targets. The recommended minimum is <strong>25g for women, 38g for men</strong>, and most people fall between 12-18g. Fiber lowers cholesterol, stabilizes blood sugar, feeds gut microbiota, reduces colorectal cancer risk, and regulates bowel movements. Unlike protein, you cannot easily recover from a low-fiber diet &mdash; the best sources are whole plant foods. This guide shows exactly which foods provide the most fiber per serving, how to increase it without gas and bloating, and why the distinction between soluble and insoluble fiber still matters.
    </p>
  </>
);

export const body: ReactElement = (
  <>
    <h2>1. Targets and where they come from</h2>
    <p>
      The US Institute of Medicine considers 14g of fiber per 1,000 calories consumed adequate. For a 2,000-calorie woman, that's 25g; for a 2,700-calorie man, 38g. The UK recommends 30g for all adults. Children need roughly &ldquo;age + 5&rdquo; grams. Aim for the upper limit &mdash; most research shows benefits plateau around 35-50g.
    </p>

    <h2>2. Soluble and insoluble fiber</h2>
    <p>
      <strong>Soluble fiber</strong> dissolves in water and forms a gel. It slows digestion, lowers LDL cholesterol, and stabilizes blood glucose. Found in oats, beans, apples, psyllium, and flaxseeds.
    </p>
    <p>
      <strong>Insoluble fiber</strong> does not dissolve. It adds bulk to stool and speeds up transit time. Found in wheat bran, whole grains, nuts, and vegetable skins.
    </p>
    <p>
      You need both. Most whole plant foods contain a mix, so eating a variety automatically balances the ratio.
    </p>

    <h2>3. Cheapest 10g of fiber</h2>
    <ul>
      <li>1/2 cup (100g) cooked black beans: 7.5g</li>
      <li>1/2 cup (100g) cooked lentils: 8g</li>
      <li>1 cup (80g) raspberries: 8g</li>
      <li>2 tablespoons chia seeds: 10g</li>
      <li>1 cup (100g) cooked peas: 8g</li>
      <li>1 medium pear (with skin): 5.5g</li>
      <li>1 cup (40g) bran flakes: 7g</li>
      <li>1 medium avocado: 10g</li>
    </ul>

    <h2>4. Sample 35g fiber day</h2>
    <pre>{`Breakfast: oats (1 cup) + strawberries + chia         → 12g
Snack: apple with skin                         → 4.5g
Lunch: lentil soup + whole grain bread         → 11g
Snack: handful of almonds (30g)                → 3.5g
Dinner: black beans + brown rice + broccoli     → 13g
Total:                                              ~44g`}</pre>
    <p>
      When you add two or three of these meals to your routine, reaching the target becomes automatic.
    </p>

    <h2>5. The increase rule</h2>
    <p>
      Jumping from 15g to 40g at once guarantees gas, bloating, and cramps. Increase by <strong>5g per week</strong> and drink more water as you increase. Your gut bacteria need 2-4 weeks to adapt their populations. If you've been eating low-fiber for years, plan a one-month increase. Symptoms during the transition are normal, not harmful.
    </p>

    <h2>6. Water increases with fiber</h2>
    <p>
      Fiber absorbs water. Without adequate fluid intake, insoluble fiber can actually worsen constipation. Rough rule: add 250ml of water for every 10g of fiber above your baseline. Most people already don't drink enough water, so this is a double win.
    </p>

    <h2>7. Beans are the highest leverage food</h2>
    <p>
      One cup of cooked beans costs about $0.40 and provides 12-16g of fiber for 15g of protein. No food category comes close to this cost-fiber-protein trio. Canned beans (drained and rinsed) retain 90% of homemade fiber. Lentils cook in 20 minutes without soaking. If you add one cup of beans per day, you've reached half of 30g.
    </p>

    <h2>8. Fruit: eat whole, don't juice</h2>
    <p>
      Orange juice has almost no fiber. A whole orange has 3g. Apple juice: 0g. Apple with skin: 4.5g. Juicing removes exactly the part of the plant you want. Smoothies are better than juice (fiber remains intact) but still cause faster sugar absorption than chewing. For fruit, chew first.
    </p>

    <h2>9. Supplements are not essential, but as backup</h2>
    <p>
      Psyllium husk is the most researched fiber supplement: 1 tablespoon provides ~5g of fiber, mostly soluble, and reliably lowers LDL. It's useful as a complement or for specific targets (cholesterol, IBS). But it does not replace the micronutrients, polyphenols, and resistant starch that come with whole plant foods. Supplements should be added to a plant-based diet, not replace it.
    </p>

    <h2>10. &ldquo;High fiber&rdquo; label math</h2>
    <p>
      US FDA rules: &ldquo;high fiber&rdquo; = 5g+ per serving; &ldquo;good source&rdquo; = 2.5-4.9g. But serving sizes are often unrealistic (30g cereal, 1 slice of bread). Instead, check the fiber content per 100g. For whole grains, a rule of thumb: aim for <strong>at least 3g of fiber per 100 kcal</strong> or a carbohydrate-to-fiber ratio below 10.
    </p>

    <h2>11. Common mistakes</h2>
    <ul>
      <li>
        <strong>Assuming &ldquo;whole grain&rdquo; means high fiber.</strong> Many breads contain 2g per slice &mdash; barely different from white bread. Look for 5g+ per 100g.
      </li>
      <li>
        <strong>Relying only on salad.</strong> A large salad might be 4-6g of fiber. It helps, but beans and oats do more per plate.
      </li>
      <li>
        <strong>Peeling everything.</strong> Most of the fiber in apples, pears, cucumbers, or potatoes is in the skin. Wash, don't peel.
      </li>
      <li>
        <strong>Increasing too quickly.</strong> Bloating and quitting are often the reasons for failure. 5g per week is the speed limit.
      </li>
      <li>
        <strong>Forgetting water.</strong> Without liquid, fiber causes exactly the problem it's supposed to solve.
      </li>
    </ul>

    <h2>12. Do the calculation</h2>
    <p>
      Use the calculator to determine your target based on calorie intake, then track your meals for a week to see where you are. Most people are shocked to see how many grams a typical day contains.
    </p>
    <p>
      <a href="/tools/fiber-intake-calculator">Fiber intake calculator</a>
      <a href="/tools/carbohydrate-calculator">Carbohydrate calculator</a>
      <a href="/tools/calorie-calculator">Calorie calculator</a>
    </p>
  </>
);