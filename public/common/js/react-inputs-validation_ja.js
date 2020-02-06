//バリデーションの日本語化
window.REACT_INPUTS_VALIDATION = {
    customErrorMessage: {
        "en-US": {
            textbox: {
                empty: name => `必須項目です。`,
                invalid: name => `無効な形式です。`,
                invalidFormat: name => `半角数字で入力してください。`,
                inBetween: name => min => max => `${min}文字から${max}文字の間で入力してください。`,
                lessThan: name => min => `${min}文字以上で入力してください。`,
                greaterThan: name => max => `${max}文字以下で入力してください。`,
                lengthEqual: name => length => `${length}文字で入力してください。`,
                twoInputsNotEqual: () => `2つの入力が正しくありません。`
            },
            radiobox: {
                empty: name => `選択してください。`
            },
            checkbox: {
                unchecked: name => `${name} must be checked(custom message)`
            },
            select: {
                empty: name => `選択してください。`
            },
            textarea: {
                empty: name => `必須項目です。`,
                invalid: name => `無効な形式です。`,
                invalidFormat: name => `半角数字で入力してください。`,
                inBetween: name => min => max => `${min}文字から${max}文字の間で入力してください。`,
                lessThan: name => min => `${min + 1}文字以上で入力してください。`,
                greaterThan: name => max => `${max - 1}文字以下で入力してください。`,
                lengthEqual: name => length => `${length}文字で入力してください。`,
                twoInputsNotEqual: () => `2つの入力が正しくありません。`
            }
        }
    }
};