
const Test = () => {

    // const numbers = [10, 20, 30, 40, 50];
    // console.log('numbers', numbers);

    // const total = (arr :number[]): number => {
    //         let sum = 0;
    //         for (let i = 0; i < arr.length; i++){
    //             sum += arr[i];
    //         }
    //         return sum;
    // }

    // console.log(total(numbers));
    // total(numbers);

    // const reverseString = (str : string) => {
    //     return str.split('').reverse().join('');
    //   }
      
    //   // テスト
    //   const input: string = "iwai kentaro";
    //   console.log(reverseString(input)); // 出力: "!tpircSavaJ ,olleH"
      

    //   const checkEvenOrOdd = (num:number) => {
    //     return num % 2 === 0 ? '偶数' : '奇数';
    //   };
    //   console.log(checkEvenOrOdd(1));
      

    //   const array: number[] = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7];
    //   const arrayChange = (arr: number[]) :number[] => {
    //     return [...new Set(arr)]
    //   }
      
    //   console.log('arrayChange', arrayChange(array));


    //   for (let i = 1; i <= 100; i++) {
    //     if (i % 3 === 0 && i % 5 === 0) {
    //       console.log('FizzBuzz');
    //     } else if (i % 3 === 0) {
    //       console.log('Fizz');
    //     } else if (i % 5 === 0) {
    //       console.log('Buzz');
    //     } else {
    //       console.log(i);
    //     }
    //   }


    const numbers: number[] = [14, 5, 8, 12, 3];
    const maxNumber = (arr:number[]) :number => {
        return Math.max(...arr)
    }

    console.log(maxNumber(numbers));
    
    const array1:number[] = [1, 2, 3, 4];
    const array2:number[] = [3, 4, 5, 6];
    const array3:number[] = array1.concat(array2);

    const arrayChange = (arr: number[]):number[] => {
        return [...new Set(arr)];
    };
    console.log('arrayChange', arrayChange(array3));

    // const numberMix = () => {

    // }

    const isPrime = (num: number): string => {
        if (num <= 1) {
          return '素数以外'; // 1以下は素数ではない
        }
        if (num === 2) {
          return '素数'; // 2は素数
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return '素数以外'; // 他の数で割り切れる場合は素数ではない
          }
        }
        return '素数'; // 割り切れなければ素数
      };
      
      // テスト
      console.log(isPrime(1)); // 出力: "素数以外"
      console.log(isPrime(2)); // 出力: "素数"
      console.log(isPrime(17)); // 出力: "素数"
      console.log(isPrime(18)); // 出力: "素数以外"
      


      function countVowels(str: string): number {
        const vowels = 'aeiouAEIOU';
        let count = 0;
      
        // 通常のforループで文字列を1文字ずつ処理
        for (let i = 0; i < str.length; i++) {
          const char = str[i]; // 現在の文字を取得
          if (vowels.includes(char)) {
            count++;
          }
        }
      
        return count;
      }
      
      // テスト
      const input = "JavaScript is amazing!";
      console.log(countVowels(input)); // 出力: 7
      

    return (
        <>
        {/* <p>{array}</p>
        <p>{arrayChange(array)}</p> */}
        {/* <p>{total(numbers)}</p> */}
        </>
    )
}

export default Test;