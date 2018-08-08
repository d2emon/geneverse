class ScalableSize:
    def __init__(self, size, scale=0):
        self.size = size
        self.scale = scale

    def adjust(self):
        while self.size < 1:
            if self.size <= 0:
                break
            self.scale -= 1
            self.size *= 10

        while self.size > 10:
            self.scale += 1
            self.size /= 10

    def __repr__(self):
        return "{}*10^{}m".format(self.size, self.scale)


class Scalable:
    def __init__(self, name, size, scale=0):
        self.name = name
        self.size = ScalableSize(size, scale)

    def __repr__(self):
        return "{} ({})".format(self.name, self.size)
