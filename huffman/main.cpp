#include <cstdlib>
#include <iostream>
#include <fstream>
#include <string>
#include "frame.h"


using namespace std;

int main(){
	system("title Huffman MakeTree/Coder/Encoder-[歡迎]");
	cout << "歡迎來到霍夫曼(Huffman)編碼器" << endl
         << "按任意鍵進入選單..." << endl
         << "若中途要離開請按 [Ctrl+C]" << endl;
	system("pause");
	system("cls");
	menu(0);
	return 0;
}
