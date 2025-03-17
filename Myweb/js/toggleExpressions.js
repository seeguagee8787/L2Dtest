console.log("🔹 toggleExpressions.js 已載入");

// 狀態變數
let isJacketOn = true;
let currentExpression = "neutral"; // 預設為正常表情

// **切換外套**
function toggleJacket() {
    if (!window.model) {
        console.log("❌ Live2D 模型尚未載入，無法切換外套！");
        return;
    }

    let expression = isJacketOn ? "jacket_off" : "jacket_on";
    console.log("🧥 切換外套：" + expression);
    
    try {
        window.model.expression(expression);
        isJacketOn = !isJacketOn; // 切換狀態
    } catch (error) {
        console.error("⚠️ 切換外套時發生錯誤:", error);
    }
}

// **設定表情**
function setExpression(expression) {
    if (!window.model) {
        console.log("❌ Live2D 模型尚未載入，無法切換表情！");
        return;
    }

    if (expression === currentExpression) {
        console.log("🔄 表情已經是：" + expression);
        return;
    }

    console.log("😀 切換表情為：" + expression);
    
    try {
        window.model.expression(expression);
        currentExpression = expression; // 更新當前表情狀態
    } catch (error) {
        console.error("⚠️ 切換表情時發生錯誤:", error);
    }
}

// **監聽按鈕點擊事件**
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("toggleJacket").addEventListener("click", toggleJacket);
    document.getElementById("setHappy").addEventListener("click", () => setExpression("happy"));
    document.getElementById("setAngry").addEventListener("click", () => setExpression("angry"));
    document.getElementById("setNeutral").addEventListener("click", () => setExpression("neutral"));
});
